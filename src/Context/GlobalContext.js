import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  const apiUrl = "https://json-server-d2dynamicflow.herokuapp.com";
  // Fetch Games
  const fetchGames = async () => {
    try {
      const res = await fetch(`${apiUrl}/games`)
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error);
    }
  }
  // Fetch Game By Id
  const fetchGameById = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/games/${id}`)
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error);
    }
  }
  // Fetch Tournaments
  const fetchTournaments = async () => {
    try {
      const res = await fetch(`${apiUrl}/tournaments`)
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error);
    }
  }
  // Convert To Slug
  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }

  let initialState = {
    "loading": false,
    "games": [],
    "tournaments": [],
    "function": {
      fetchGames,
      fetchGameById,
      fetchTournaments,
      convertToSlug
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
