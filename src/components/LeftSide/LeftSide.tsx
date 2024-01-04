import './LeftSide.css'; 
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "../../constants";
import {UserCard} from "../UserCard/UserCard";
export function LeftSide() {
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar">
        <div className="side">
            <span className='header-tittle'><h2 className='appTitulo'>MindBoost</h2></span>
            <UserCard />

            <ul className="list-Unorded">
            {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link`}>
                <NavLink
                  to={link.route}
                  className="nav-container">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={"group-img"}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        </div>
    </nav>
  )
}

export default LeftSide