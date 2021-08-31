import { Link, useLocation } from "react-router-dom";

const NavItem = ({ navItem, toggleMenu }) => {
  const location = useLocation();
  return (
    <li className="menu-item">
      <Link to={ navItem.pathname } onClick={ toggleMenu } className={ location.pathname === navItem.pathname ? "menu-link active" : "menu-link" }>{ navItem.text }</Link>
    </li>
  )
}

export default NavItem
