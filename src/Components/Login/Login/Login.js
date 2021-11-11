import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        
    }
     return (
        <div>
           <h1>Login</h1> 
           { !isLoading && <form onSubmit={handleLoginSubmit}>

                <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input type="email" name="email" onBlur={handleOnBlur} className="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div className="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input type="password" name="password" onBlur={handleOnBlur}className="form-control" id="inputPassword3"/>
            </div>
        </div>
            <NavLink  to="/register">New User ? Please Register Now</NavLink>
        <div class="col-12 mt-3 mb-5">
            <button type="submit" class="btn btn-dark px-4">Log in</button>
        </div>
           </form>}
           {isLoading && <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>}
                            {user?.email && <div class="alert alert-success" role="alert">
                            User has successfully registered!
                            </div>}
                            {authError && <div class="alert alert-danger" role="alert">
                                        {authError}
                                        </div>}

        </div>
    );
};

export default Login;