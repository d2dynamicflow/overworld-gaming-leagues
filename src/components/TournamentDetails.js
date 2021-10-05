import moment from "moment";
import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import { formatOrdinals } from "../Helpers";
import RegistrationTimer from "./RegistrationTimer";
import goldTrophy from "../asset/img/gold-trophy.svg";
import silverTrophy from "../asset/img/silver-trophy.svg";
import bronzeTrophy from "../asset/img/bronze-trophy.svg";


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
        <div className="md:flex items-center">
          <p className="registration-timer">
            <RegistrationTimer timer={ tournament.startDate } />
          </p>
          <button className="btn-enroll">Enroll Now</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 lg:w-6/12">
        { tournament.prizes.map((prize, index) =>
          <div className="tournament-details-block-prizes" key={ index }>
            <p className="text-center font-bold">{ formatOrdinals(index + 1) }</p>
            <img src={ (index === 0 && goldTrophy) || (index === 1 && silverTrophy) || (index === 2 && bronzeTrophy) } alt="gold-trophy" className="max-w-full h-auto" />
            <p className="text-center font-bold md:mt-3 text-2xl">${ prize.prize }</p>
          </div>
        ) }
      </div>
    </div>
  )
}

export default TournamentDetails
