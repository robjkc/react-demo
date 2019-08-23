import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import Groceries from './components/Groceries';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/counter">Counter</Link></Nav.Link>
          <Nav.Link><Link to="/grocery">Grocery List</Link></Nav.Link>
        </Navbar>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/grocery" component={Groceries} />
        </div>
      </div>
    </Router >

  );
}

export default App;
