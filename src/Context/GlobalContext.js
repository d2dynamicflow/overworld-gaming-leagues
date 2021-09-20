import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let messageArray = []
  let initialState = {
    "loading": true,
    "auth": {
      "isLogin": localStorage.getItem("login") === "true" ? true : false,
      "user": JSON.parse(localStorage.getItem("user")),
      "token": ""
    },
    "games": [],
    "users": [],
    "tournaments": [],
    "messages": []
  };

  const [state, setState] = useState(initialState);
  console.log(state);
  // Fetch Games
  const fetchGames = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/games`)
      const data = await res.json()
      return data
    } catch (error) {
      messageArray = [...messageArray, { "type": "error", "body": "Game Data Fetching Error", "desc": error.message }]
      return null
    }
  }
  // Fetch Game By Id
  // const fetchGameById = async (id) => {
  //   try {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/games/${id}`)
  //     const data = await res.json()
  //     return data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // Fetch Tournaments
  const fetchTournaments = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/tournaments`)
      const data = await res.json()
      return data
    } catch (error) {
      messageArray = [...messageArray, { "type": "error", "body": "Tournament Data Fetching Error", "desc": error.message }]
      return null
    }
  }
  // Fetch Tournaments
  // const fetchTournamentsById = async (id) => {
  //   try {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/tournaments/${id}`)
  //     const data = await res.json()
  //     return data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`)
      const data = await res.json()
      return data
    } catch (error) {
      messageArray = [...messageArray, { "type": "error", "body": "User Data Fetching Error", "desc": error.message }]
      return null
    }
  }

  useEffect(() => {
    console.log(state);
    const getData = async () => {
      const gamesFromServer = await fetchGames()
      const tournamentsFromServer = await fetchTournaments()
      const usersFromServer = await fetchUsers()
      if (gamesFromServer || tournamentsFromServer || usersFromServer) {
        setState(prevState => {
          return { ...prevState, "games": gamesFromServer, "tournaments": tournamentsFromServer, "users": usersFromServer, "loading": false };
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
