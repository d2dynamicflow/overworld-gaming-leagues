import { Link } from "react-router-dom";
import moment from 'moment';

const Game = ({ game }) => {
  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  return (
    <Link to={ {
      pathname: `/games/${convertToSlug(game.name)}`,
      state: { id: game.id }
    } }>
      <div className="game">
        <div className="game-top">
          <p>ENTER</p>
        </div>
        <div className="game-starts">
          {
            game.tournaments.length !== 0 ?
              <p>TOURNAMENT STARTS<br />{ moment(game.startDate).fromNow() } { moment(game.startDate).format("H:mm:ss") }</p>
              : <p>Comming Soon</p>
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
