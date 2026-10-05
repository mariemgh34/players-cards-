import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      {players.map((player) => (
        <Player
          key={player.jerseyNumber}
          {...player}
        />
      ))}
    </div>
  );
};

export default PlayersList;