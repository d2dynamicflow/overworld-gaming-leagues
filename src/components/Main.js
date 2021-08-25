import { Switch, Route } from "react-router-dom";
import { Tournaments } from "./Tournaments"

const Main = () => {
  return (
    <section id="mainSection" className="flex-grow bg-gray-100 py-8">
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact>
            <h1 className="text-3xl text-center text-white mb-8">UPCOMING TOURNAMENTS</h1>
            <Tournaments />
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
          <Route path="/logout">
            <h1 className="text-3xl text-center text-white mb-8">LOGOUT</h1>
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default Main
