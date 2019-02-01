import { postConstants } from '../constants';

export function postMiddleware() {
  return store => next => action => {
    if (action.type === postConstants.GET_POST_SUCCESS) {
      const now = new Date();
      const month = now.getMonth() + '-' + now.getYear();
      let postsViewed = JSON.parse(localStorage.getItem('posts_viewed'));
      if (!postsViewed) {
        postsViewed = {};
      }
      if (!postsViewed[month]) {
        postsViewed[month] = [];
      }
      if (postsViewed[month].indexOf(action.post.slug) === -1 && postsViewed[month].length === 5) {
         return store.dispatch({ type: postConstants.SET_BLANK_POST, payload: true });
      } else if (postsViewed[month].indexOf(action.post.slug) === -1) {
        postsViewed[month].push(action.post.slug);
        localStorage.setItem('posts_viewed', JSON.stringify(postsViewed));
      }
      store.dispatch({ type: postConstants.SET_BLANK_POST, payload: false });
    }
    next(action);
  }
}
