export const addPost = (item) => dispatch => {
    return dispatch({ type: 'ADD_ITEM', payload: item });
};
export const deletePost = (item) => dispatch => {
    return dispatch({type: 'DELETE_ITEM', payload: item});
};
export const showDetails = (item) => dispatch => {
    return dispatch({type: 'SHOW_DETAILS', payload: item});
};