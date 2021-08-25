import NavItem from "./NavItem"

// import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    {
      text: 'TOURNAMENTS',
      pathname: '/'
    },
    {
      text: 'NFT MARKET',
      pathname: '/nft-market'
    },
    {
      text: 'MERCH STORE',
      pathname: '/merch-store'
    },
    {
      text: 'LEAGUE TABLES',
      pathname: '/league-tables'
    },
    {
      text: 'PLAYER STATS',
      pathname: '/player-stats'
    },
    {
      text: 'LOGOUT',
      pathname: '/logout'
    },
  ]
  return (
    <nav id="mainNav">
      <div className="container mx-auto">
        <ul className="menu-nav">
          {navItems.map((navItem, index) => (
            <NavItem navItem={navItem} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
