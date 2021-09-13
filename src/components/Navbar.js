import { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import NavItem from "./NavItem"

const Navbar = () => {
  const [responsive, setResponsive] = useState(false)
  const [largeScreen, setLargeScreen] = useState(window.innerWidth >= 1024)
  const toggleMenu = () => {
    setResponsive(!responsive);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setResponsive(false);
        setLargeScreen(true);
      } else {
        setLargeScreen(false);
      }
    }
    window.addEventListener('resize', handleResize)
  })

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
    }
  ]

  return (
    <nav id="mainNav">
      <div className="container mx-auto flex flex-col justify-end lg:justify-center">
        <div className="flex">
          <button className="menu-toggler" onClick={ toggleMenu }>
            <BiMenu />
          </button>
        </div>
        <ul className={ largeScreen ? "menu-nav" : responsive ? "menu-nav show" : "menu-nav hide" }>
          { navItems.map((navItem, index) => (
            <NavItem navItem={ navItem } key={ index } toggleMenu={ toggleMenu } />
          )) }
          { true ?
            <li className="menu-item">
              <a href="/login" className="menu-link">LOG IN</a>
            </li>
            :
            <li className="menu-item">
              <a href="/logout" className="menu-link">LOGOUT</a>
            </li>
          }
          <li className="menu-item">
            <a href="/" onClick={ toggleMenu } className="menu-btn">CONNECT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
