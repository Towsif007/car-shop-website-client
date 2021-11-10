import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/explore">
      <ExploreProducts></ExploreProducts>
      </Route>
      <Route path="*">
      <NotFound></NotFound>
      </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
