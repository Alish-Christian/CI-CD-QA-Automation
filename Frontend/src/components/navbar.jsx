import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState('cupcake');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored || 'cupcake';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'cupcake' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-200 shadow-sm transition-all">
      {/* 1. Logo and Title Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* Hamburger Icon for Mobile */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* Mobile Menu Dropdown */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/" className={({isActive}) => `px-2 py-1 rounded-md transition-all duration-200 ${isActive ? 'text-primary font-semibold bg-base-200/70' : 'hover:bg-base-200/60 hover:text-primary'}`}>Home</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive}) => `px-2 py-1 rounded-md transition-all duration-200 ${isActive ? 'text-primary font-semibold bg-base-200/70' : 'hover:bg-base-200/60 hover:text-primary'}`}>Dashboard</NavLink></li>
            <li><NavLink to="/projects" className={({isActive}) => `px-2 py-1 rounded-md transition-all duration-200 ${isActive ? 'text-primary font-semibold bg-base-200/70' : 'hover:bg-base-200/60 hover:text-primary'}`}>Projects</NavLink></li>
            <li><NavLink to="/settings" className={({isActive}) => `px-2 py-1 rounded-md transition-all duration-200 ${isActive ? 'text-primary font-semibold bg-base-200/70' : 'hover:bg-base-200/60 hover:text-primary'}`}>Settings</NavLink></li>
            <li><NavLink to="/docs" className={({isActive}) => `px-2 py-1 rounded-md transition-all duration-200 ${isActive ? 'text-primary font-semibold bg-base-200/70' : 'hover:bg-base-200/60 hover:text-primary'}`}>Docs</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl transition-transform duration-200 hover:scale-105 hover:text-primary">
          🤖 AI Test Toolkit
        </Link>
      </div>

      {/* 2. Desktop Menu Section (hidden on small screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-btn transition-all duration-200 ${isActive ? 'bg-base-200 text-primary' : 'hover:bg-base-200/70 hover:text-primary'} underline-offset-8 hover:underline`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({isActive}) => `px-3 py-2 rounded-btn transition-all duration-200 ${isActive ? 'bg-base-200 text-primary' : 'hover:bg-base-200/70 hover:text-primary'} underline-offset-8 hover:underline`}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive}) => `px-3 py-2 rounded-btn transition-all duration-200 ${isActive ? 'bg-base-200 text-primary' : 'hover:bg-base-200/70 hover:text-primary'} underline-offset-8 hover:underline`}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({isActive}) => `px-3 py-2 rounded-btn transition-all duration-200 ${isActive ? 'bg-base-200 text-primary' : 'hover:bg-base-200/70 hover:text-primary'} underline-offset-8 hover:underline`}>Settings</NavLink>
          </li>
          <li>
            <NavLink to="/docs" className={({isActive}) => `px-3 py-2 rounded-btn transition-all duration-200 ${isActive ? 'bg-base-200 text-primary' : 'hover:bg-base-200/70 hover:text-primary'} underline-offset-8 hover:underline`}>Docs</NavLink>
          </li>
        </ul>
      </div>

      {/* 3. User Profile and Actions Section */}
      <div className="navbar-end">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle transition-transform hover:scale-105" aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13.02A9 9 0 1 1 10.98 2.36 7 7 0 0 0 21.64 13.02z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 8a1 1 0 0 1-1-1h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 2 0h-1a1 1 0 0 1-1 1ZM4 12a1 1 0 0 1-1-1H2a1 1 0 1 1 0-2h1a1 1 0 1 1 2 0H5a1 1 0 0 1-1 1Zm14.95 7.536a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.415l.707.708a1 1 0 0 1 0 1.414ZM6.172 6.172a1 1 0 0 1-1.415 0l-.707-.707A1 1 0 1 1 5.464 4.05l.708.707a1 1 0 0 1 0 1.415Zm12.02-1.829a1 1 0 0 1 0-1.415l.707-.707A1 1 0 0 1 20.636 3.1l-.707.707a1 1 0 0 1-1.415 0ZM4.05 20.636a1 1 0 0 1 0-1.415l.707-.707a1 1 0 0 1 1.415 1.415l-.707.707a1 1 0 0 1-1.415 0Z"/></svg>
          )}
        </button>
        <button className="btn btn-ghost btn-circle transition-transform hover:scale-105">
          {/* Notification Bell Icon */}
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar transition-transform hover:scale-105">
            <div className="w-10 rounded-full">
              {/* Placeholder for user avatar */}
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;