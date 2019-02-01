import { postConstants } from '../constants';
import { postService } from '../services';

export const postActions = {
  getPosts,
  clearPosts,
  getPost
};

function getPosts(page = 1) {
  return dispatch => {
    dispatch(request());

    postService.getPosts(page)
      .then(
        data => {
          dispatch(success(data.posts));
          dispatch(nextPage(data.posts.current_page + 1));
        },
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: postConstants.GET_POSTS_REQUEST } }
  function success(posts) { return { type: postConstants.GET_POSTS_SUCCESS, posts } }
  function nextPage(page) { return { type: postConstants.POSTS_NEXT_PAGE, page } }
  function failure(error) { return { type: postConstants.GET_POSTS_FAILURE, error } }
}

function getPost(slug) {
  return dispatch => {
      dispatch(request());

      postService.getPost(slug)
          .then(
              data => dispatch(success(data.posts[0])),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: postConstants.GET_POST_REQUEST } }
  function success(post) { return { type: postConstants.GET_POST_SUCCESS, post } }
  function failure(error) { return { type: postConstants.GET_POST_FAILURE, error } }
}

function clearPosts() {
  return { type: postConstants.CLEAR_POSTS };
}
