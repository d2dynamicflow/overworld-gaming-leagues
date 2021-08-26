import { Link } from "react-router-dom";

import moment from 'moment';

const Tournament = ({ tournament }) => {
  return (
    <Link to={`/games/${tournament.name}`}>
      <div className="tournament">
        <div className="tournament-top">
          <p>ENTER</p>
        </div>
        <div className="tournament-starts">
          <p>TOURNAMENT STARTS<br />{moment(tournament.startDate).fromNow()} {moment(tournament.startDate).format("H:mm:ss")}</p>
        </div>
        <div className="tournament-img">
          <img src={tournament.imgUrl} alt={tournament.name} />
        </div>
      </div>
    </Link>
  )
}

export default Tournament
