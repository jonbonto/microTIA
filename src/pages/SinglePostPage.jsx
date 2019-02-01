import React from 'react';
import { connect } from 'react-redux';

import { postActions } from '../actions';
import Post from '../components/Post';

class SinglePostPage extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.slug);
  }

  render() {
    const { post, error, loading, blank } = this.props;
    if (blank) {
      return (
        <div>Anda Sudah melihat 5 artikel bulan ini</div>
      );
    }
    return (
      <React.Fragment>
        {error && <span className="text-danger">ERROR: {error}</span>}
        {post &&  <Post post={post} />}
        {loading && <em>Loading post...</em>}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { post, error, loading, blank } = state.posts;
  return {
    post,
    error,
    loading,
    blank,
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
