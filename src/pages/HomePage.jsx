import React from 'react';
import { connect } from 'react-redux';

import { postActions } from '../actions';
import PostList from '../components/PostList';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
        {posts.posts &&  <PostList posts={posts.posts} />}
        {posts.loading && <em>Loading posts...</em>}
      </>
    );
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (page) => dispatch(postActions.getPosts(page)),
    clearPosts: dispatch(postActions.clearPosts)
  };
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };
