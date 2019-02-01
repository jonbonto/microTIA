import React from 'react';
import { connect } from 'react-redux';

import { postActions } from '../actions';
import Post from '../components/Post';

class SinglePostPage extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.slug);
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
        {posts.post &&  <Post post={posts.post} />}
        {posts.loading && <em>Loading post...</em>}
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { posts } = state;
  return {
    posts,
    slug: ownProps.match.params.slug
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (slug) => dispatch(postActions.getPost(slug))
  };
}

const connectedSinglePostPage = connect(mapStateToProps, mapDispatchToProps)(SinglePostPage);
export { connectedSinglePostPage as SinglePostPage };
