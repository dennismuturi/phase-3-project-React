import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";


export default function Nav({brandName,cartItems}) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <nav className="navigation">
        
      <Link  className="brand-name"to="/">{brandName}</Link>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
       
        <ul>
          <li><Link to="/checkout"> My Cart :{cartItems}</Link></li>
          <li> <a><Link to="/">Home</Link></a>
          </li>
          <li>
            <a><Link to="/about">About</Link></a>
          </li>
          <li>
            <a><Link to="/contact">Contact</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
