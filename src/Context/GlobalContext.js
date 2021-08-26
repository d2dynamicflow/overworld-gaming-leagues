import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let initialState = {
    tournaments: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      tournaments: [
        {
          name: "Tournament_1",
          startDate: "Friday, August 28, 2021 1:24:35 AM",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        },
        {
          name: "Tournament_2",
          startDate: "Friday, September 3, 2021 3:09:42 AM",
          imgUrl: "https://images.squarespace-cdn.com/content/v1/52d46dd9e4b0f63bcb07fa01/1539643046154-E6FOCHNEMXC24204H6NW/screen-call-of-duty-black-ops-4-reveal-trailer-1.jpg"
        },
        {
          name: "Tournament_3",
          startDate: "Friday, September 3, 2021 4:00:00 AM",
          imgUrl: "https://www.obilisk.co/wp-content/uploads/2019/09/GreedFall-Launch-Trailer-_-PS4-1-28-screenshot.png"
        },
        {
          name: "Tournament_4",
          startDate: "Friday, August 28, 2021 5:42:00 AM",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        },
        {
          name: "Tournament_5",
          startDate: "Friday, August 28, 2021 6:57:00 AM",
          imgUrl: "https://images.squarespace-cdn.com/content/v1/52d46dd9e4b0f63bcb07fa01/1539643046154-E6FOCHNEMXC24204H6NW/screen-call-of-duty-black-ops-4-reveal-trailer-1.jpg"
        },
        {
          name: "Tournament_6",
          startDate: "Friday, September 3, 2021 10:30:00 AM",
          imgUrl: "https://www.obilisk.co/wp-content/uploads/2019/09/GreedFall-Launch-Trailer-_-PS4-1-28-screenshot.png"
        },
        {
          name: "Tournament_7",
          startDate: "Friday, August 28, 2021 11:24:00 AM",
          imgUrl: "https://cdn.videogamesblogger.com/wp-content/uploads/2016/04/Gears-4-Horizontal.jpg"
        }
      ]
    });
  }, [])

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  )
}
