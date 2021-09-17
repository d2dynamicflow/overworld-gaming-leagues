import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  const apiUrl = "https://json-server-d2dynamicflow.herokuapp.com";

  let initialState = {
    "loading": true,
    "auth": {
      "isLogin": localStorage.getItem("isLogin"),
      "user": JSON.parse(localStorage.getItem("user")),
      "token": ""
    },
    "games": [],
    "tournaments": [],
    "messages": [],
    "function": [
      login
    ]
  };

  const [state, setState] = useState(initialState);
  let messageArray = []
  // Fetch Games
  const fetchGames = async () => {
    try {
      const res = await fetch(`${apiUrl}/games`)
      const data = await res.json()
      return data
    } catch (error) {
      messageArray = [...messageArray, { "type": "error", "body": "Data Fetching Error", "desc": error.message }]
      return null
    }
  }
  // Fetch Game By Id
  // const fetchGameById = async (id) => {
  //   try {
  //     const res = await fetch(`${apiUrl}/games/${id}`)
  //     const data = await res.json()
  //     return data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // Fetch Tournaments
  const fetchTournaments = async () => {
    try {
      const res = await fetch(`${apiUrl}/tournaments`)
      const data = await res.json()
      return data
    } catch (error) {
      messageArray = [...messageArray, { "type": "error", "body": "Data Fetching Error", "desc": error.message }]
      return null
    }
  }
  // Fetch Tournaments
  // const fetchTournamentsById = async (id) => {
  //   try {
  //     const res = await fetch(`${apiUrl}/tournaments/${id}`)
  //     const data = await res.json()
  //     return data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    const getData = async () => {
      const gamesFromServer = await fetchGames()
      const tournamentsFromServer = await fetchTournaments()
      if (gamesFromServer || tournamentsFromServer) {
        setState(prevState => {
          return { ...prevState, "games": gamesFromServer, "tournaments": tournamentsFromServer, "loading": false };
        })
      } else {
        setState(prevState => {
          return { ...prevState, "messages": [...messageArray] };
        })
      }
    }
    getData()
  }, [])
  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
