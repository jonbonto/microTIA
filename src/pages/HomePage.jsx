import React from 'react';
import { connect } from 'react-redux';

import { postActions } from '../actions';
import PostList from '../components/PostList';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    window.onscroll = () => {
      const {
        getPosts,
        error,
        loading,
        end,
        nextPage  
      } = this.props;

      if (error || loading || end) return;

      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        getPosts(nextPage);
      }
    };
  }
  
  componentDidMount() {
    this.props.getPosts();
  }

  componentWillUnmount() {
    this.props.clearPosts();
    window.onscroll = null;
  }

  render() {
    const { posts, error, end, loading } = this.props;
    return (
      <React.Fragment>
        {posts &&  <PostList posts={posts} />}
        {loading && <em>Loading posts...</em>}
        {error && <span className="text-danger">ERROR: {error}</span>}
        {end && <em>No more posts...</em>}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { posts, error, loading, end, nextPage } = state.posts;
  return {
    posts, 
    error, 
    loading, 
    end, 
    nextPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (page) => dispatch(postActions.getPosts(page)),
    clearPosts: () => dispatch(postActions.clearPosts())
  };
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };
