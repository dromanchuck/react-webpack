import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


class Details extends React.Component {

    render() {
        const selectedPost = this.props.selectedPost;
        return (
            <div>
                <h1>Details of post #{selectedPost.id}
                </h1>
                <h2>Text:</h2>
                <p>{selectedPost.text}</p>
                <h2>Date of creating: {selectedPost.date}</h2>
                <h2>Author: {selectedPost.author}</h2>
                <h2>Count of Sympols: {selectedPost.length}</h2>
                <Link to="./creating">Back</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
  selectedPost: state.postsReducer.selectedPost
});
export default connect(mapStateToProps)(Details);