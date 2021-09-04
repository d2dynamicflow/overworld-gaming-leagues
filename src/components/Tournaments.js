import { useHistory, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Tournament from "./Tournament";


const Tournaments = () => {
  const [state] = useContext(GlobalContext);
  const history = useHistory();
  const location = useLocation();
  // useEffect is similar to componentDidMount:
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });
  const gameId = location.state !== undefined ? location.state.id : 0;
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
