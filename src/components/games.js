import React from "react";
import "../components/Styles/Games.css";

const gamesList = [
  {
    title: "Memory Fun Game",
    description: "A card matching game to enhance memory skills using React.",
    link: "https://nivethasri641.github.io/memory/",
    icon: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic two-player game with win detection and reset option.",
    link: "https://nivethasri641.github.io/tic-toc/",
    icon: "https://cdn-icons-png.flaticon.com/512/566/566294.png",
  },
  {
    title: "Whack-a-Mole",
    description: " A classic arcade game to test your reflexes and speed.",
    link: "https://nivethasri641.github.io/tic-toc/",
    icon: "https://flyclipart.com/whack-a-mole-mole-png-57119",
  },
];

const Games = () => {
  return (
    <section className="games-section">
      <h2 className="games-title">🎮 Games Corner</h2>
      <p className="games-subtitle">
        Fun mini-games built to improve logic, problem-solving, and UI skills.
      </p>

      <div className="games-grid">
        {gamesList.map((game, index) => (
          <div className="game-card" key={index}>
            <div className="game-icon">
              <img src={game.icon} alt={game.title} />
            </div>

            <h3>{game.title}</h3>
            <p>{game.description}</p>

            <a
              href={game.link}
              target="_blank"
              rel="noreferrer"
              className="play-btn"
            >
              ▶ Play Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
