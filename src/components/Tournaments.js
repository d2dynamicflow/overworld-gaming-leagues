import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Tournament from "./Tournament";


export const Tournaments = () => {
  const [state, setState] = useContext(GlobalContext);
  return (
    <div className="tournaments">
      {state.tournaments.map((tournament, index) => (
        <Tournament tournament={tournament} key={index} />
      ))}
    </div>
  )
}
