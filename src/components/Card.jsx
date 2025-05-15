import "../styles/Card.css";

export default function Card({ playerName, imgUrl, onClick }) {

    return (
        <div className="player-card" onClick={onClick}>
            <img src={imgUrl} alt={playerName} />
            <h2>{playerName}</h2>
        </div>
    );
}