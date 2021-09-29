import { useContext, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Profile = () => {
  const [state] = useContext(GlobalContext);

  const { username } = useParams();
  const history = useHistory();
  const location = useLocation();

  // useEffect is similar to componentDidMount:
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });
  const users = state.users;
  // eslint-disable-next-line no-unused-vars
  const user = users.find((user) => user.username === username);
  // const tournament = state.tournaments.find(tournament => tournament.id === tournamentId);
  // const game = state.games.find(game => game.id === tournament.gameId);
  return (
    <div className='player-profile'>
      <div className="player-profile-block">
        <img src="https://pbs.twimg.com/profile_images/1074703146985906177/qMFAro-S_400x400.jpg" alt="profile_img" className="player-profile-block-img" />
        <div className="player-profile-block-info">
          <h3 className="player-profile-name">Ridwan Malik</h3>
          <p className="mb-4">739-555-0789-194</p>
          <div className="inline-flex gap-4">
            <div className="player-profile-block-sm">
              <p className="player-profile-block-text">PROFILE VIEWS</p>
              <p className="player-profile-block-data">19403</p>
            </div>
            <div className="player-profile-block-sm">
              <p className="player-profile-block-text">JOINED</p>
              <p className="player-profile-block-data">12/19/2016</p>
            </div>
          </div>
        </div>
      </div>
      <div className="player-profile-block">
        <div className="player-profile-info-blocks">
          <div className="player-profile-info-block">
            <p className="player-profile-info-block-text">RANK</p>
            <p className="player-profile-info-block-data">15</p>
          </div>
          <div className="player-profile-info-block">
            <p className="player-profile-info-block-text">EARNINGS</p>
            <p className="player-profile-info-block-data">$411.53</p>
          </div>
          <div className="player-profile-info-block">
            <p className="player-profile-info-block-text">RECORD</p>
            <p className="player-profile-info-block-data">11 W - 13 L</p>
          </div>
          <div className="player-profile-info-block">
            <p className="player-profile-info-block-text">RECENT MATCHES</p>
            <p className="player-profile-info-block-data">L W W W W</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Profile
