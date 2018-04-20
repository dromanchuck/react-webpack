
const defaultState = {
    posts: [],
    selectedPost: {}
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return addPost(state, action.payload);
        case 'DELETE_ITEM':
            return deletePost(state, action.payload);
        case 'SHOW_DETAILS':
            return showDetails(state, action.payload);
        default:
            return state;
    }
}
const deletePost = (state, deletedPost) => {
    const updateState = state.posts.filter((item) => {
        if (deletedPost.id === item.id) {
            return false;
        } else {
            return true;
        }
    });
    return {
        ...state,
        posts: updateState
    }
};

const addPost = (state, item) => {
    const updatedState = state.posts.slice(0);
    updatedState.push(item);
    return {
        ...state,
        posts:updatedState
    }
};
const showDetails = (state, item) => {
  return {
      ...state,
      selectedPost: item
  }
};