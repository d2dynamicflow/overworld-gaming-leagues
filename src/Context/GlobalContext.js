import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
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
  useEffect(() => {
    let messageArray = []

    // Fetch Games
    const fetchGames = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/games`)
        const data = await res.json()
        return data
      } catch (error) {
        toast.error(error.message)
        messageArray = [...messageArray, { "type": "error", "body": "Game Data Fetching Error", "desc": error.message }]
        return null
      }
    }
    // Fetch Tournaments
    const fetchTournaments = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/tournaments`)
        const data = await res.json()
        return data
      } catch (error) {
        toast.error(error.message)
        messageArray = [...messageArray, { "type": "error", "body": "Tournament Data Fetching Error", "desc": error.message }]
        return null
      }
    }
    // Fetch Users
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/users`)
        const data = await res.json()
        return data
      } catch (error) {
        toast.error(error.message)
        messageArray = [...messageArray, { "type": "error", "body": "User Data Fetching Error", "desc": error.message }]
        return null
      }
    }

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
