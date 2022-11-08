import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Vistas/LandingPage';
import Home from './Vistas/Home';
import Form from './Vistas/Form';
import Detail from './Vistas/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
     <Route exact path='/' render={props => <LandingPage {...props} />}/>
     <Route path='/home' render={props => <Home {...props} />}/>
     <Route path='/create' render={props => <Form {...props} />}/>
     <Route path='/videogame/:id' render={props => <Detail {...props} />}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
