import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    closeMenu();
    logout();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const getNavLinks = () => {
    if (!user) { // Logged Out User
      return [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ];
    }
    // ... (rest of getNavLinks function remains the same)
    switch (user.role) {
      case 'Citizen':
        return [
          { title: 'Dashboard', path: '/citizen/dashboard' },
          { title: 'Report Issue', path: '/citizen/report' },
          { title: 'Rewards', path: '/citizen/rewards' },
          { title: 'Notifications', path: '/citizen/notifications' },
        ];
      case 'Worker':
        return [
          { title: 'Dashboard', path: '/worker/dashboard' },
          { title: 'Directions', path: '/worker/directions' },
          { title: 'New Complaint', path: '/worker/new-complaint' },
          { title: 'Resolutions', path: '/worker/resolutions' },
        ];
      case 'Officer':
        return [
          { title: 'Dashboard', path: '/officer/dashboard' },
          { title: 'Manage Workers', path: '/officer/manage-workers' },
          { title: 'Update Bin', path: '/officer/update-bin' },
        ];
      default:
        return [{ title: 'Home', path: '/' }];
    }
  };
  const navLinks = getNavLinks();

  // EDIT: Create a dynamic profile link based on user role
  const profileLink = user ? `/${user.role.toLowerCase()}/profile` : '/login';

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="CleanConnect Logo" className="navbar-main-logo" />
          <div className="logo-text">
            <span className="project-name">CleanConnect</span>
            <span className="tagline">Smart Sanitation Portal</span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <ul className="nav-menu-desktop">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.title}>
              <NavLink to={link.path} className="nav-link">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="header-actions">
          {user ? (
            <div className="user-info">
              {/* EDIT: Use the dynamic profileLink variable */}
              <NavLink to={profileLink} className="user-profile-link">
                <FaUserCircle />
                <span>{user.name}</span>
              </NavLink>
              <button onClick={handleLogout} className="btn btn-logout">Logout</button>
            </div>
          ) : (
            <Link to="/login" onClick={closeMenu}>
              <button className="btn btn-primary">Login / Register</button>
            </Link>
          )}
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* --- Mobile Dropdown Menu --- */}
        <div className={`nav-menu-mobile-container ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu-mobile">
            {user && (
              <li className="nav-item nav-item-profile">
                {/* EDIT: Use the dynamic profileLink variable */}
                <NavLink to={profileLink} className="nav-link" onClick={closeMenu}>
                  Profile
                </NavLink>
              </li>
            )}
            {navLinks.map((link) => (
              <li className="nav-item" key={link.title}>
                <NavLink to={link.path} className="nav-link" onClick={closeMenu}>
                  {link.title}
                </NavLink>
              </li>
            ))}
            {user ? (
              <li className="nav-item nav-item-logout">
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </li>
            ) : (
              <li className="nav-item nav-item-login">
                <Link to="/login" onClick={closeMenu}>
                  <button className="btn btn-primary btn-small">Login / Register</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
