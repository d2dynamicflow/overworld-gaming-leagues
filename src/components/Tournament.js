import moment from 'moment';
import TournamentTimer from "./TournamentTimer";
import { Link } from "react-router-dom";
import { convertToSlug } from '../Helpers'


const Tournament = ({ tournament }) => {
  return (
    <Link to={ {
      pathname: `/tournaments/${convertToSlug(tournament.name)}`,
      state: { id: tournament.id }
    } }>
      <div className="tournament" >
        <div className="tournament-img">
          <img src={ tournament.game.imgUrl } alt={ tournament.game.name } />
        </div>
        <div className="tournament-body">
          <h1 className="tournament-title">{ tournament.game.name } :<br /> { tournament.name }</h1>
          <p className="tournament-date">
            <span className="tournament-date-1">{ moment(tournament.startDate).format("MMM DD, h:mm A [EDT]") }</span>
            <span className="tournament-date-2">
              <TournamentTimer timer={ tournament.startDate } />
            </span>
          </p>
          <p className="tournament-keyval"><span className="tournament-key">Entry/Player</span>{ tournament.entryPlayer }</p>
          <p className="tournament-keyval"><span className="tournament-key">Team Size</span>{ tournament.teamSize }</p>
          <p className="tournament-keyval"><span className="tournament-key">Regions</span>{ tournament.regions }</p>
          <p className="tournament-keyval"><span className="tournament-key">Skill Level</span>{ tournament.skillLevel }</p>
        </div>
      </div>
    </Link>
  )
}

export default Tournament
