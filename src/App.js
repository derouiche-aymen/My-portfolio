import './App.css';
import NavBar from './components/navBar';
import { Route, Switch } from 'react-router-dom';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/Contact';
import Background from './components/Background';
import backgroundImg from '../src/images/background.jpg'

function App() {
  return (
    <div className="App h-[100%]" style={{ backgroundImage:`url(${backgroundImg})` }}>
      <NavBar />
      <Switch>
        <Route path='/experience'>
          <Experience />
        </Route>
        <Route path='/background'>
          <Background />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
