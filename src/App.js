import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as moment from 'moment';

import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    const postList = data.posts.map(post => (
      <ListGroup.Item>
        <Row key={post.id}>
          <Col xs={6} md={8}>
            <span>{post.categories[0].name}</span>
            <a href="#"><h3 dangerouslySetInnerHTML={{ __html: post.title }} /></a>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <Row>
              <Col md={4}>
                <Row>
                  <Col md={4}>
                    <Image width={40} src={post.author.avatar_url} roundedCircle={true}/>
                  </Col>
                  <Col md={8}>
                    <p>{post.author.first_name} {post.author.last_name}</p>
                    <p>{moment(post.date).fromNow()}</p>
                  </Col>
                </Row>
              </Col>
              <Col style={{ textAlign: 'right' }} md={{ span: 4, offset: 4 }}>
                {post.comments_count ? post.comments_count + ' Komentar' : ''}
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={4}>
            <a href="#"><Image src={post.featured_image.attachment_meta.sizes.medium.url} alt={post.featured_image.description} /></a>
          </Col>
        </Row>
      </ListGroup.Item>
    ))
    return (
      <Container>
        <Card style={{ width: '80vw' }}>
          <ListGroup>
            {postList}
          </ListGroup>
        </Card>;
      </Container>
    );
  }
}

export default App;
