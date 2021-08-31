import { useContext, useEffect, useState } from "react";
import moment from 'moment';
import { GlobalContext } from "../Context/GlobalContext";

const Tournament = ({ tournament }) => {
  const [state] = useContext(GlobalContext)
  const [game, setGame] = useState({})

  useEffect(() => {
    const getGame = async () => {
      const gameFromServer = await state.function.fetchGameById(tournament.gameId)
      setGame(gameFromServer)
    }

    getGame()
  }, [state, tournament])

  const momentFromNow = (t1, t2) => {

    let output = "";
    let momentYears = Math.abs(t1.diff(t2, "years"));
    let momentMonths = Math.abs(t1.diff(t2, "months"));
    let momentDays = Math.abs(t1.diff(t2, "days"));
    let momentHours = Math.abs(t1.diff(t2, "hours"));
    let momentMinutes = Math.abs(t1.diff(t2, "minutes"));
    let momentSeconds = Math.abs(t1.diff(t2, "seconds"));

    if (t1.isBefore(t2)) {
      output = output.concat("Starts in ");
    } else {
      output = output.concat("Started At ");
    }

    if (momentYears) {
      output = output.concat(momentYears, "Y ");
    }

    if (momentMonths) {
      if (!momentYears) {
        output = output.concat(momentMonths, "M ");
      } else {
        output = output.concat(momentMonths % 12, "M ");
      }
    }

    if (momentDays) {
      if (!momentMonths) {
        output = output.concat(momentDays, "D ");
      } else {
        output = output.concat(momentDays % 30, "D ");
      }
    }

    if (momentHours) {
      if (!momentDays) {
        output = output.concat(momentHours, "H ");
      } else {
        output = output.concat(momentHours % 24, "H ");
      }
    }

    if (momentMinutes) {
      if (!momentHours) {
        output = output.concat(momentMinutes, "M ");
      } else {
        output = output.concat(momentMinutes % 60, "M ");
      }
    }

    if (momentSeconds) {
      if (!momentMinutes) {
        output = output.concat(momentSeconds, "S ");
      } else {
        output = output.concat(momentSeconds % 60, "S ");
      }
    }


    return output;
  }

  return (
    <div className="tournament" >
      <div className="tournament-img">
        <img src={ game.imgUrl } alt={ game.name } />
      </div>
      <div className="tournament-body">
        <h1 className="tournament-title">{ game.name } :<br /> { tournament.name }</h1>
        <p className="tournament-date">
          <span className="tournament-date-1">{ moment(tournament.startDate, "dddd, MMMM D, YYYY h:mm:ss A").format("MMM DD, h:mm A") }</span>
          <span className="tournament-date-2">{ momentFromNow(moment(), moment(tournament.startDate)) }</span>
        </p>
        <p className="tournament-keyval"><span className="tournament-key">Entry/Player</span>{ tournament.entryPlayer }</p>
        <p className="tournament-keyval"><span className="tournament-key">Team Size</span>{ tournament.teamSize }</p>
        <p className="tournament-keyval"><span className="tournament-key">Regions</span>{ tournament.regions }</p>
        <p className="tournament-keyval"><span className="tournament-key">Skill Level</span>{ tournament.skillLevel }</p>
      </div>
    </div>
  )
}

export default Tournament
