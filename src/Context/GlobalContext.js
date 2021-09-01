import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  // Fetch Games
  const fetchGames = async () => {
    // const res = await fetch('http://51.89.149.4:5000/games')
    // const data = await res.json()
    // return data
    return JSON.parse(`[
      {
        "id": 1,
        "name": "Call of Duty: Modern Warfare",
        "imgUrl": "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg"
      },
      {
        "id": 2,
        "name": "Rocket League",
        "imgUrl": "https://archive.esportsobserver.com/wp-content/uploads/2021/04/RL.jpg"
      },
      {
        "id": 3,
        "name": "League of Legends",
        "imgUrl": "https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"
      },
      {
        "id": 4,
        "name": "Counter-Strike: Global Offensive",
        "imgUrl": "https://www.teahub.io/photos/full/212-2120981_counter-strike-global-offensive.jpg"
      },
      {
        "id": 5,
        "name": "Fortnite",
        "imgUrl": "https://cdn2.unrealengine.com/17br-s17-launcher-egs-fc-1920x1080-1920x1080-9f32f6158d1f.jpg"
      }
    ]`);
  }
  // Fetch Game By Id
  const fetchGameById = async (id) => {
    // const res = await fetch(`http://51.89.149.4:5000/games/${id}`)
    // const data = await res.json()
    // return data
    let data = JSON.parse(`[
    {
      "id": 1,
      "name": "Call of Duty: Modern Warfare",
      "imgUrl": "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg"
    },
    {
      "id": 2,
      "name": "Rocket League",
      "imgUrl": "https://archive.esportsobserver.com/wp-content/uploads/2021/04/RL.jpg"
    },
    {
      "id": 3,
      "name": "League of Legends",
      "imgUrl": "https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"
    },
    {
      "id": 4,
      "name": "Counter-Strike: Global Offensive",
      "imgUrl": "https://www.teahub.io/photos/full/212-2120981_counter-strike-global-offensive.jpg"
    },
    {
      "id": 5,
      "name": "Fortnite",
      "imgUrl": "https://cdn2.unrealengine.com/17br-s17-launcher-egs-fc-1920x1080-1920x1080-9f32f6158d1f.jpg"
    }
  ]`)
    data = data.filter(game => game.id === id);
    console.log(data);
    return data[0];
  }
  // Fetch Tournaments
  const fetchTournaments = async () => {
    // const res = await fetch('http://51.89.149.4:5000/tournaments')
    // const data = await res.json()
    // return data
    return JSON.parse(`[
      {
        "id": 1,
        "gameId": 1,
        "name": "Tournament 1",
        "startDate": "Friday, August 28, 2021 1:24:35 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "5v5",
        "regions": "North America",
        "skillLevel": "All"
      },
      {
        "id": 2,
        "gameId": 1,
        "name": "Tournament 2",
        "startDate": "Friday, September 3, 2021 3:09:42 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "5v5",
        "regions": "North America",
        "skillLevel": "All"
      },
      {
        "id": 3,
        "gameId": 2,
        "name": "Tournament 3",
        "startDate": "Friday, September 3, 2021 4:00:00 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "2v2",
        "regions": "NA + EU",
        "skillLevel": "All"
      },
      {
        "id": 4,
        "gameId": 3,
        "name": "Tournament 4",
        "startDate": "Friday, August 28, 2021 5:42:00 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "1v1",
        "regions": "Europe",
        "skillLevel": "All"
      },
      {
        "id": 5,
        "gameId": 1,
        "name": "Tournament 5",
        "startDate": "Friday, August 28, 2021 6:57:00 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "5v5",
        "regions": "North America",
        "skillLevel": "All"
      },
      {
        "id": 6,
        "gameId": 5,
        "name": "Tournament 6",
        "startDate": "Friday, September 3, 2021 10:30:00 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "1v1",
        "regions": "NA + EU",
        "skillLevel": "All"
      },
      {
        "id": 7,
        "gameId": 1,
        "name": "Tournament 7",
        "startDate": "Friday, August 28, 2021 11:24:00 AM",
        "entryPlayer": "Free Entry",
        "teamSize": "5v5",
        "regions": "North America",
        "skillLevel": "All"
      }
    ]`);
  }

  let initialState = {
    "games": [],
    "tournaments": [],
    "function": {
      fetchGames,
      fetchGameById,
      fetchTournaments
    }
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      const gamesFromServer = await fetchGames()
      const tournamentsFromServer = await fetchTournaments()
      setState(prevState => {
        return { ...prevState, "games": gamesFromServer, "tournaments": tournamentsFromServer };
      })
    }
    getData()
  }, [])
  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
