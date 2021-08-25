import { useState } from "react";

export const Tournaments = () => {
  const [tournaments, setTournaments] = useState([
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    },
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    },
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    },
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    },
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    },
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    },
    {
      name: "Tournament 1",
      startDate: "00:00:00 28-08-2021",
      imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
    }
  ]);
  return (
    <div className="tournaments">
      {tournaments.map((tournament, index) => (
        <div className="tournament">
          <div className="tournament-top">
            <p>ENTER</p>
          </div>
          <div className="tournament-starts">
            <p>TOURNAMENT STARTS<br />IN 5 DAYS 2:40:53</p>
          </div>
          <div className="tournament-img">
            <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg" alt="games posters horizontal" />
          </div>
        </div>
      ))}

    </div>
  )
}
