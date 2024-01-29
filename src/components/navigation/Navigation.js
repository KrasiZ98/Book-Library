import './navigation.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { SideBar } from '../side-bar/SideBar';
import { PiUserGearLight } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { AuthContext } from '../../context/AuthContext';
import { FaHome } from "react-icons/fa";


export const Navigation = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  function onLogout(e) {
    e.preventDefault();
    userLogout();
    navigate('/');
  }

  return (
    <>
      <header className="header">
        <div className="search">
          <BsSearch
            className="search-icon"
            onClick={() => setSidebar(!sidebar)}
          />
        </div>

        <nav className="nav">
          <ul>
            {user.email ? (
              <>
                <li>
                  <Link to="/">
                    <FaHome className="profile-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/favorite">
                    <MdFavoriteBorder className="profile-icon" />
                    {user?.favoriteBook?.length}
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <PiUserGearLight className="profile-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={(e) => onLogout(e)}>
                    <BiLogOutCircle className="profile-icon" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {sidebar && <SideBar />}
    </>
  );
};