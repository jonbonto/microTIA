import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

import './App.css';
import { HomePage, SinglePostPage } from './pages';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Card>
            <Navbar>
              <Link to="/"><Navbar.Brand>microTIA</Navbar.Brand></Link>
              <Navbar.Toggle />
            </Navbar>
          </Card>
          <Container>
            <ScrollUpButton />
            <Route path="/" exact component={HomePage} />
            <Route path="/:slug" component={SinglePostPage} />
          </Container>
        </React.Fragment>
      </Router> 
    );
  }
}

export default App;
