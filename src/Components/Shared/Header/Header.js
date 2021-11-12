import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand text-light">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link active text-light" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/explore" className="nav-link active text-light">Explore More Products</Link>
        </li>
       { user?.email ?<li className="nav-item">
          <Link to="/dashboard" className="nav-link active text-light">Dashboard</Link>
        </li>: []}
        {
           user?.email ?
            <button onClick={logOut} className="btn btn-light">LogOut 
             </button>
            :
          <li className="nav-item">
            <Link to="/login" className="nav-link active text-light">Login</Link>
          </li>
        }
        <span className="navbar-text text-light mx-5">
        Signed in as: <a className="text-light" href="#login">{user.displayName}</a>
      </span>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;