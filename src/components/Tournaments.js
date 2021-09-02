import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Tournament from "./Tournament";


const Tournaments = () => {
  const [state] = useContext(GlobalContext);
  const history = useHistory();

  const location = useLocation();
  if (!location.state) {
    history.replace("/");
  }
  const gameId = location.state.id;
  const game = state.games.find(game => game.id === gameId);
  const tournaments = state.tournaments.filter(tournament => tournament.gameId === gameId);

  return (
    <div className="tournaments">
      { tournaments && tournaments.map((tournament, index) => (
        <Tournament tournament={ { ...tournament, "game": game } } key={ index } />
      )) }
    </div>
  )
}

export default Tournaments
