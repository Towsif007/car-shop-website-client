import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Purchase from './Components/Purchase/Purchase';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/register">
      <Register></Register>
      </Route>
      <Route path="/explore">
      <ExploreProducts></ExploreProducts>
      </Route>
      <PrivateRoute path="/purchase/:carId">
      <Purchase></Purchase>
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
      <Header></Header>
      <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path="*">
      <NotFound></NotFound>
      <Footer></Footer>
      </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
