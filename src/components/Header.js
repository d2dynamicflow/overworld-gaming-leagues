import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex align-middle justify-center p-4 bg-indigo">
      <Link to="/">
        <h1 className="text-white text-xl md:text-2xl">OVERWORLD GAMING LEAGUES</h1>
      </Link>
    </header>
  )
}

export default Header
