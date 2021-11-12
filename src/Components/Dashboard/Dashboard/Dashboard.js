import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';
import {NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import Reviews from '../Reviews/Reviews';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  let {path, url} = useRouteMatch();
  const {admin, logOut} = useAuth();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
       
       
                <Switch>        
                    <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>                   
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                </Switch>
        
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
       
        <List> 
    {!admin && <Box>    
    <Button onClick={logOut} variant="contained">LogOut</Button> <br /> <br />
    <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}/payment`}>Payment</NavLink></Button> <br /> <br />
    <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}`}>My Order</NavLink></Button> <br /> <br />
    <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}/reviews`}>Give Review</NavLink></Button> <br /> <br />
    </Box>}
    
        {admin && <Box>

            <Button onClick={logOut} variant="contained">LogOut</Button> <br /> <br />
            <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}/makeadmin`}>Make Admin</NavLink></Button> <br /> <br />
            <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}/manageallorder`}>Manage All Orders</NavLink></Button> <br /> <br />
            <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}/manageproduct`}>Manage Product</NavLink></Button> <br /> <br />       
            <Button sx={{ width: 150}} variant="outlined"> <NavLink style={{textDecoration: 'none'}}to={`${url}/addproduct`}>Add A Product </NavLink></Button>
        </Box> }
        </List>
      </Drawer>
    </Box>
  );
}





