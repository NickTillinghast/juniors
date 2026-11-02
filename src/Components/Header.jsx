import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/Barbers", label: "About" },
  { to: "/Services", label: "Services" },
  { to: "/Location", label: "Location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // Close the mobile menu when tapping anywhere outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <Link to="/" onClick={close}>
        <img
          className="site-header__logo"
          src="https://res.cloudinary.com/dqpatwz6c/image/upload/h_160,f_auto,q_auto/v1585082702/juniors/yiqb0xw6owx1uspyprnu.png"
          alt="Junior's Barber Parlor — home"
        />
      </Link>
      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="site-nav" className={open ? "site-nav site-nav--open" : "site-nav"}>
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} end onClick={close} className="site-nav__link">
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
