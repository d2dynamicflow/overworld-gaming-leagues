import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex align-middle justify-center p-4 bg-indigo text-white text-2xl">
      <Link to="/">
        <h1>OVERWORLD GAMING LEAGUES</h1>
      </Link>
    </header>
  )
}

export default Header
