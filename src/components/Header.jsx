import "../styles/Header.css";


export default function Header({ currentScore, bestScore }) {

    return (
        <div className="header">
            <div className="game-title">
                <h1>FootyFlip</h1>
                <h4>Test your memory with football stars!</h4>
            </div>
            <div className="score-board">
                <h3>Current Score: {currentScore}</h3>
                <h3>Best Score: {bestScore}</h3>
            </div>
        </div>
    );
}