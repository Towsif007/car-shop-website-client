import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Myorder = () => {
    const {user} = useAuth();
    const [myorder, setMyorder] = useState([])

    useEffect(() =>{
        const url = `http://localhost:5000/purchase?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyorder(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/purchase/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('Item has deleted')
                const remaining = myorder.filter(row => row._id !== id)
            setMyorder(remaining)
            }
            
        })


    }

    return (
        <div>
            <h1>My Orders: {myorder.length} </h1>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Car Id</TableCell> 
            <TableCell align="right">Car Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myorder.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell> 
              <TableCell align="right">{row.carId}</TableCell>
              <TableCell align="right">{row.carname}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.address}</TableCell>   <Button onClick={() => handleDelete(row._id)} variant="contained">Cancel</Button>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default Myorder;