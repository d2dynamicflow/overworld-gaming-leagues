import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Games from "./Games";
import Loader from "./Loader";
import TournamentDetails from "./TournamentDetails";
import Tournaments from "./Tournaments";
import Login from "./Login";
import Profile from "./Profile";
import { Signup } from "./Signup";


const Main = () => {
  const [state] = useContext(GlobalContext);
  return (
    <section id="mainSection" className="flex-grow bg-gray-100 py-8">
      <div className="container mx-auto h-full flex flex-col">
        <Switch>
          <Route path="/" exact>
            <h1 className="text-3xl text-center text-white mb-8">UPCOMING TOURNAMENTS</h1>
            { state.loading ? <Loader /> : <Games /> }
          </Route>
          <Route path="/nft-market">
            <h1 className="text-3xl text-center text-white mb-8">NFT MARKET</h1>
          </Route>
          <Route path="/merch-store">
            <h1 className="text-3xl text-center text-white mb-8">MERCH STORE</h1>
          </Route>
          <Route path="/league-tables">
            <h1 className="text-3xl text-center text-white mb-8">LEAGUE TABLES</h1>
          </Route>
          <Route path="/player-stats">
            <h1 className="text-3xl text-center text-white mb-8">PLAYER STATS</h1>
          </Route>
          <Route path="/login">
            <h1 className="text-3xl text-center text-white mb-8">LOG IN</h1>
            <Login />
          </Route>
          <Route path="/signup">
            <h1 className="text-3xl text-center text-white mb-8">SIGN UP</h1>
            <Signup />
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route path="/games/:name">
            <h1 className="text-3xl text-center text-white mb-8">All TOURNAMENTS</h1>
            { state.loading ? <Loader /> : <Tournaments /> }
          </Route>
          <Route path="/tournaments/:name">
            { state.loading ? <Loader /> : <TournamentDetails /> }
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default Main
