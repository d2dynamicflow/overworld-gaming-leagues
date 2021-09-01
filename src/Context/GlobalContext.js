import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  // Fetch Games
  const fetchGames = async () => {
    const res = await fetch('http://51.89.149.4:5000/games')
    const data = await res.json()
    return data
  }
  // Fetch Game By Id
  const fetchGameById = async (id) => {
    const res = await fetch(`http://51.89.149.4:5000/games/${id}`)
    const data = await res.json()
    return data
  }
  // Fetch Tournaments
  const fetchTournaments = async () => {
    const res = await fetch('http://51.89.149.4:5000/tournaments')
    const data = await res.json()
    return data
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
