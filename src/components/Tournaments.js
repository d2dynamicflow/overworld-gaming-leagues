import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import moment from 'moment';


const Tournaments = () => {
  const [state, setState] = useContext(GlobalContext);

  const location = useLocation();
  const gameId = location.state.id;
  const game = state.games.find(game => game.id === gameId);
  const tournaments = state.tournaments.filter(tournament => tournament.gameId === gameId);

  return (
    <div className="grid grid-cols-4 gap-6 text-white">
      { tournaments.map((tournament, index) => (
        <div className="bg-indigo p-3 rounded">
          <h1 className="text-xl font-bold">{ game.name } : { tournament.name }</h1>
          {/* TODO : Date Format */ }
          {/* <p>{ moment(tournament.startDate).format("MMM DD, h:mm A") } <span className="text-red-500">Starts { moment(tournament.startDate).toNow("d[D]") }</span></p> */ }
        </div>
      )) }
    </div>
  )
}

export default Tournaments
