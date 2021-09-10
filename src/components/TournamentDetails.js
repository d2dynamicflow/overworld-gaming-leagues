import moment from "moment";
import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { GlobalContext } from "../Context/GlobalContext";
import RegistrationTimer from "./RegistrationTimer";

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
    <div className='tournament-details'>
      {/* <h1 className="text-3xl text-center text-white mb-8">TOURNAMENT DETAILS</h1> */ }
      <div className="tournament-details-block">
        <img src={ game.imgUrl } alt={ game.name } className="tournament-details-block-img" />
        <div className="tournament-details-block-info">
          <h3 className="tournament-name">{ tournament.name }</h3>
          <p className="tournament-game-name">{ game.name }</p>
          <div className="w-full lg:w-96 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 mb-3">

            <div className="tournament-details-block-sm">
              <p className="text-xs">REGISTRATION OPENS</p>
              <p>{ moment(tournament.startDate).subtract(4, 'hours').format("MMM Do h:mm A [EDT]") }</p>
            </div>

            <div className="tournament-details-block-sm">
              <p className="text-xs">START TIME</p>
              <p>{ moment(tournament.startDate).format("MMM Do h:mm A [EDT]") }</p>
            </div>
          </div>

          <table className="tournament-info-table">
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
                <td>{ tournament.teamSize } vs { tournament.teamSize }</td>
                <td>{ tournament.maxTeams }</td>
                <td>{ tournament.enrolled }</td>
                <td>{ tournament.skillLevel }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="tournament-details-block">
        <div className="flex items-center">

          <p className="registration-timer">
            <RegistrationTimer timer={ tournament.startDate } />
          </p>
          <button className="btn-enroll" disabled>Enroll Now</button>
        </div>
      </div>
    </div>
  )
}

export default TournamentDetails
