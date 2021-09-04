import moment from "moment";
import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { GlobalContext } from "../Context/GlobalContext";

const TournamentDetails = () => {
  const [state] = useContext(GlobalContext);

  const location = useLocation();
  const history = useHistory();

  // useEffect is similar to componentDidMount:
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });
  const tournamentId = location.state !== undefined ? location.state.id : 0;
  const tournament = state.tournaments.find(tournament => tournament.id === tournamentId);
  const game = state.games.find(game => game.id === tournament.gameId);
  return (
    <div className='px-4 lg:px-0'>
      {/* <h1 className="text-3xl text-center text-white mb-8">TOURNAMENT DETAILS</h1> */ }
      <div className="flex flex-col lg:flex-row bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-5">
        <img src={ game.imgUrl } alt={ game.name } className="w-full h-40 lg:w-60 lg:h-60 object-cover rounded shadow-lg mb-3 lg:mb-0 lg:mr-5" />
        <div className="flex-grow text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">{ tournament.name }</h3>
          <p className="mb-3">{ game.name }</p>
          <div className="w-full lg:w-96 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 mb-3">

            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs">START TIME</p>
              <p>{ moment(tournament.startDate).format("MMM Do h:mm A [EDT]") }</p>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs">START TIME</p>
              <p>{ moment(tournament.startDate).format("MMM Do h:mm A [EDT]") }</p>
            </div>
          </div>

          <table className="tournament-info-table table-auto">
            <thead>
              <tr className="table-header">
                <td>ENTRY/PLAYER</td>
                <td>TEAM SIZE</td>
                <td>MAX TEAMS</td>
                <td>ENROLLED</td>
                <td>SKILL LEVEL</td>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>{ tournament.entryPlayer }</td>
                <td>{ tournament.teamSize }</td>
                <td>{ tournament.maxTeams }</td>
                <td>{ tournament.enrolled }</td>
                <td>{ tournament.skillLevel }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TournamentDetails
