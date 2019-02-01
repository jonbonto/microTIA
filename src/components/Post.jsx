import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import moment from 'moment';

const Post = ({post}) => {
  moment.locale('en');
  return (
    <Card className="post-wrapper">
      <Card.Title>
        <p className="post-category">{post.categories[0].name}</p>
        <h1  className="post-heading" dangerouslySetInnerHTML={{ __html: post.title }} />
        <ul className="post-meta">
          <li className="post-meta__author-image">
            <Image width={32} src={post.author.avatar_url} roundedCircle={true}/>
          </li>
          <li>
            <span>{post.author.first_name} {post.author.last_name}</span>
            <time className="post-meta__date" dateTime={post.date}>{moment(post.date).format('LT on LL')}</time>
          </li>
        </ul>
      </Card.Title>
      <Card.Body>
        <Card.Img src={post.featured_image.source} />
        <Card.Text className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </Card.Body>
    </Card>
  );
}
export default Post;
