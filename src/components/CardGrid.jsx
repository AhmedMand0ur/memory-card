import "../styles/CardGrid.css";
import Card from "./Card.jsx";

export default function CardGrid({ players, cardClickHandler }) {



    return (
        <div className="card-container">
            {players.map((player) => <Card key={player.id} playerName={player.name} imgUrl={player.image} onClick={() => cardClickHandler(player.id)}></Card>)}
        </div>
    );
}