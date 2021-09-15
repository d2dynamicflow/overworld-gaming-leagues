import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let initialState = {
    "loading": true,
    "auth": {
      "isLogin": localStorage.getItem("isLogin"),
      "user": JSON.parse(localStorage.getItem("user")),
      "token": ""
    },
    "games": [],
    "tournaments": [],
    "messages": []
  };

  const [state, setState] = useState(initialState);
  const apiUrl = "https://json-server-d2dynamicflow.herokuapp.com";
  // Fetch Games
  const fetchGames = async () => {
    try {
      const res = await fetch(`${apiUrl}/games`)
      const data = await res.json()
      return data
    } catch (error) {
      console.log("1", state.messages);
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Data Fetching Error", "desc": error.message }] })
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
      console.log("2", state.messages);
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Data Fetching Error", "desc": error.message }] })
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


  const login = () => {

  }

  useEffect(() => {
    const getData = async () => {
      const gamesFromServer = await fetchGames()
      const tournamentsFromServer = await fetchTournaments()
      if (gamesFromServer || tournamentsFromServer) {
        setState(prevState => {
          return { ...prevState, "games": gamesFromServer, "tournaments": tournamentsFromServer, "loading": false };
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
