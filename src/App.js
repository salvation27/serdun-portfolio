// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from "./components/About/About";
import Header from './components/Header/Header'
import Footer from './components/Home/Footer';


function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio'>
              <Portfolio />
            </Route>
          </Switch>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    <Footer />
    </Router>
  );
}

export default App;
