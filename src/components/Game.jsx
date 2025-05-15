import "../styles/Game.css";
import Header from "./Header.jsx";
import CardGrid from "./CardGrid.jsx";
import { fetchPlayers } from "../utils/fetchPlayers.js";
import { useState, useEffect } from "react";

export default function Game() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedPlayerIds, setClickedPlayerIds] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const [allPlayers, setAllPlayers] = useState([]); // all 50 players
    const [players, setPlayers] = useState([]);       // current 12 shown

    useEffect(() => {
        async function load() {
            const loadedPlayers = await fetchPlayers();
            setAllPlayers(loadedPlayers);
            const random12 = getRandomPlayers(loadedPlayers, []);
            setPlayers(random12);
        }

        load();
    }, []);

    function getRandomPlayers(pool, clickedIds) {
        const shuffled = shuffleArray(pool);
        let selection = shuffled.slice(0, 12);

        const hasUnclicked = selection.some(
            (player) => !clickedIds.includes(player.id)
        );

        if (!hasUnclicked) {
            const fallbackUnclicked = pool.find(
                (p) => !clickedIds.includes(p.id)
            );

            if (fallbackUnclicked) {
                const randomIndex = Math.floor(Math.random() * selection.length);
                selection[randomIndex] = fallbackUnclicked;
            } else {
                console.warn("All 50 players have been clicked or no valid fallback.");
                return shuffled.slice(0, 12); // fallback to shuffled
            }
        }

        return selection;
    }

    function cardClickHandler(playerId) {
        if (clickedPlayerIds.includes(playerId)) {
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            setCurrentScore(0);
            setClickedPlayerIds([]);
            setGameOver(false);
            setPlayers(getRandomPlayers(allPlayers, []));
        } else {
            const newClicked = [...clickedPlayerIds, playerId];
            setClickedPlayerIds(newClicked);
            const newScore = currentScore + 1;
            setCurrentScore(newScore);

            if (newClicked.length === allPlayers.length) {
                // Win condition
                if (newScore > bestScore) {
                    setBestScore(newScore);
                }
                setGameOver(true);
            } else {
                setPlayers(getRandomPlayers(allPlayers, newClicked));
            }
        }
    }

    function shuffleArray(arr) {
        return [...arr].sort(() => Math.random() - 0.5);
    }

    return (
        <div className="game">
            <Header currentScore={currentScore} bestScore={bestScore} />
            {gameOver ? (
                <div className="game-over">
                    <h2>Congratulations! You won!</h2>
                    <button
                        onClick={() => {
                            setGameOver(false);
                            setCurrentScore(0);
                            setClickedPlayerIds([]);
                            setPlayers(getRandomPlayers(allPlayers, []));
                        }}
                    >
                        Start New Game
                    </button>
                </div>
            ) : (
                <CardGrid players={players} cardClickHandler={cardClickHandler} />
            )}
        </div>
    );
}
