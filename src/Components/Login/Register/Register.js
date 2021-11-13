import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({}) 
    const history = useHistory()
    const {user, registerUser, isLoading, authError} = useAuth()

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        console.log(newRegisterData);
        newRegisterData[field] = value;

        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = (e) =>{
        e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert('Please enter the same password')
            return
        }
       
        registerUser(registerData.email, registerData.password, registerData.name,history)
       
        
    }

    return (
        <div>
            <h1>Register</h1>
           { !isLoading && <form onSubmit={handleRegisterSubmit}>

            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">UserName:</label>
            <div className="col-sm-10">
            <input type="text" name="name" onBlur={handleOnBlur} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
            </div>
            <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Email" name="email" onBlur={handleOnBlur} className="form-control" id="inputEmail3"/>
            </div>
            </div>

            <div className="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>

            <div className="col-sm-10">
            <input type="password" placeholder="password" name="password" onBlur={handleOnBlur}className="form-control" id="inputPassword3"/>
            </div>
            </div>
            <div className="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Retype Password:</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Retype Password" name="password2" onBlur={handleOnBlur}className="form-control"/>
            </div>
            </div>
            <NavLink  to="/login">Already A User? Please Login Now</NavLink>
            <div class="col-12 mt-3 mb-5">
            <button type="submit" class="btn btn-dark px-4">Register</button>
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

export default Register;
