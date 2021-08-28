import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Game from "./Game";

const Games = () => {
  const [state, setState] = useContext(GlobalContext);
  return (
    <div className="games">
      {state.games.map((game, index) => (
        <Game game={{ ...game, tournaments: state.tournaments.filter(tournament => tournament.gameId === game.id) }} key={index} />
      ))}
    </div>
  )
}

export default Games
