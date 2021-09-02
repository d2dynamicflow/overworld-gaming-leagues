import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Game from "./Game";

const Games = () => {
  const [state] = useContext(GlobalContext);
  return (
    <>
      { state.loading && <div className="text-white text-center">Loading...</div> }
      <div className="games">
        { state.games && state.games.map((game, index) => (
          <Game game={ { ...game, tournaments: state.tournaments.filter(tournament => tournament.gameId === game.id) } } key={ index } />
        )) }
      </div>
    </>
  )
}

export default Games
