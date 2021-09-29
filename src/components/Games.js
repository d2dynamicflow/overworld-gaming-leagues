import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Game from "./Game";

const Games = () => {
  const [state] = useContext(GlobalContext);
  return (
    <div className="games">
      { state.games && state.games.map((game, index) => (
        <Game game={ { ...game, tournaments: state.tournaments.filter(tournament => tournament.gameId === game.id) } } key={ index } />
      )) }
    </div>
  )
}

export default Games
