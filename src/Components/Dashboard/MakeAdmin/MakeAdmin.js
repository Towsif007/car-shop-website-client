import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdmitSubmit = e =>{
        e.preventDefault()
        const user = {email} 
        fetch('https://immense-badlands-19935.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)
                alert('Made Admin Successfully')
            }
            
        })
    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdmitSubmit}>
            <TextField 
             label="Email"
             type="email"
             onBlur={handleOnBlur}
             variant="filled" />
             <br /> <br />
            <Button type="submit" variant="outlined">Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;