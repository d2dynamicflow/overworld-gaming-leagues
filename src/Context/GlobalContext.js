import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let initialState = {
    games: [],
    tournaments: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      games: [
        {
          id: 1,
          name: "Call of Duty: Modern Warfare",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        },
        {
          id: 2,
          name: "Rocket League",
          imgUrl: "https://images.squarespace-cdn.com/content/v1/52d46dd9e4b0f63bcb07fa01/1539643046154-E6FOCHNEMXC24204H6NW/screen-call-of-duty-black-ops-4-reveal-trailer-1.jpg"
        },
        {
          id: 3,
          name: "League of Legends",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        },
        {
          id: 4,
          name: "Counter-Strike: Global Offensive",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        },
        {
          id: 5,
          name: "Fortnite",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        },
      ],
      tournaments: [
        {
          id: 1,
          gameId: 1,
          name: "Tournament 1",
          startDate: "Friday, August 28, 2021 1:24:35 AM",
        },
        {
          id: 2,
          gameId: 1,
          name: "Tournament 2",
          startDate: "Friday, September 3, 2021 3:09:42 AM",
        },
        {
          id: 3,
          gameId: 2,
          name: "Tournament 3",
          startDate: "Friday, September 3, 2021 4:00:00 AM",
        },
        {
          id: 4,
          gameId: 3,
          name: "Tournament 4",
          startDate: "Friday, August 28, 2021 5:42:00 AM",
        },
        {
          id: 5,
          gameId: 1,
          name: "Tournament 5",
          startDate: "Friday, August 28, 2021 6:57:00 AM",
        },
        {
          id: 6,
          gameId: 5,
          name: "Tournament 6",
          startDate: "Friday, September 3, 2021 10:30:00 AM",
        },
        {
          id: 7,
          gameId: 1,
          name: "Tournament 7",
          startDate: "Friday, August 28, 2021 11:24:00 AM",
        },
      ]
    });
  }, [])

  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
