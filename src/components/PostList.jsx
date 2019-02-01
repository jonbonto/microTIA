import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import * as moment from 'moment';
import 'moment/locale/id';

const PostList = ({posts}) => {
  const postList = posts.map(post => (
    <ListGroup.Item key={post.slug}>
      <Row>
        <Col xs={6} md={8}>
          <span>{post.categories && post.categories[0].name}</span>
          <Link to={`/${post.slug}`}><h3 dangerouslySetInnerHTML={{ __html: post.title }} /></Link>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <Row>
            <Col md={4}>
              <Row>
                <Col md={4}>
                  <Image width={40} src={post.author && post.author.avatar_url} roundedCircle={true}/>
                </Col>
                <Col md={8}>
                  <p>{post.author && post.author.first_name} {post.author && post.author.last_name}</p>
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
          <Link to={`/${post.slug}`}><Image src={post.featured_image && post.featured_image.attachment_meta.sizes.medium.url} alt={post.featured_image && post.featured_image.description} /></Link>
        </Col>
      </Row>
    </ListGroup.Item>
  ));
  
  return (
    <Card>
      <ListGroup>
        {postList}
      </ListGroup>
    </Card>
  );
}

export default PostList;
