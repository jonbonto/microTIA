import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

import PostList from './components/PostList';
import Post from './components/Post';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Card>
            <Navbar>
              <Navbar.Brand href="/">microTIA</Navbar.Brand>
              <Navbar.Toggle />
            </Navbar>
          </Card>
          <Container>
            <Route path="/" exact render={() => <PostList posts={data.posts} />} />
            <Route path="/:slug" component={({match}) => <Post match={match}/>} />
          </Container>
        </React.Fragment>
      </Router> 
    );
  }
}

export default App;
