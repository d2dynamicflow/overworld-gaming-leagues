import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Tournament from "./Tournament";


const Tournaments = () => {
  const [state] = useContext(GlobalContext);

  const location = useLocation();
  const gameId = location.state.id;
  const tournaments = state.tournaments.filter(tournament => tournament.gameId === gameId);

  return (
    <div className="tournaments">
      { tournaments && tournaments.map((tournament, index) => (
        <Tournament tournament={ tournament } key={ index } />
      )) }
    </div>
  )
}

export default Tournaments
