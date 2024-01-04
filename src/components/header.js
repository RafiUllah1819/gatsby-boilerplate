import * as React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header>
  <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent:'center', }}>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
