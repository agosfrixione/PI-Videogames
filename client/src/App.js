import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Vistas/LandingPage';
import Home from './Vistas/Home';
import Form from './Vistas/Form';
import Detail from './Vistas/Detail';
import NavBar from './Vistas/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Switch>
     <Route exact path='/' component={LandingPage}/>
     <Route path='/home' component={Home}/>
     <Route path='/create' component={Form}/>
     <Route path='/country/:id' component={Detail}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
