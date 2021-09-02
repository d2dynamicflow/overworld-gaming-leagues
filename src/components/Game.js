import { Link } from "react-router-dom";
import moment from 'moment';
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Game = ({ game }) => {
  const [state] = useContext(GlobalContext)
  let latestTournament = {}
  if (game.tournaments.length !== 0) {
    let latestTournamentId = game.tournaments[0].id;
    latestTournament = state.tournaments.find(tournament => tournament.id === latestTournamentId)
    game.tournaments.map(tournament => {
      latestTournamentId = moment(tournament.startDate).isBefore(latestTournament.startDate) ? tournament.id : latestTournamentId
      return 0
    })
    latestTournament = state.tournaments.find(tournament => tournament.id === latestTournamentId)
  }
  return (
    <Link to={ {
      pathname: `/games/${state.functions.convertToSlug(game.name)}`,
      state: { id: game.id }
    } }>
      <div className="game">
        <div className="game-top">
          <p>ENTER</p>
        </div>
        <div className="game-starts">
          {
            game.tournaments.length !== 0 ?
              <p>TOURNAMENT STARTS<br />{ moment(latestTournament.startDate).from() } { moment(latestTournament.startDate).format("H:mm:ss") }</p>
              : <p>Coming Soon</p>
          }
        </div>
        <div className="game-img">
          <img src={ game.imgUrl } alt={ game.name } />
        </div>
      </div>
    </Link>
  )
}

export default Game
