import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let initialState = {
    "games": [],
    "tournaments": [],
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
  console.log(state);

  // Fetch Games
  const fetchGames = async () => {
    const res = await fetch('http://localhost:5000/games')
    const data = await res.json()
    return data
  }
  // Fetch Tournaments
  const fetchTournaments = async () => {
    const res = await fetch('http://localhost:5000/tournaments')
    const data = await res.json()
    return data
  }


  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
