import { postConstants } from '../constants';

export function posts(state = { posts: [], nextPage: 1}, action) {
  switch (action.type) {
    case postConstants.GET_POSTS_REQUEST:
    case postConstants.GET_POST_REQUEST:
      return {
        ...state,
        error: undefined,
        loading: true
      };
    case postConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts] 
      };
    case postConstants.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.post 
      };
    case postConstants.POSTS_NEXT_PAGE:
      return {
        ...state,
        nextPage: action.page
      };
    case postConstants.GET_POSTS_FAILURE:
    case postConstants.GET_POST_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
