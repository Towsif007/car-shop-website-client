import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <Link to="/home" class="navbar-brand text-light">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link active text-light" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/explore" className="nav-link active text-light">Explore More Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active text-light">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;