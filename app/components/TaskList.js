import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deletePost, showDetails} from '../redux/modules/posts/postsActions';
import {bindActionCreators} from 'redux';
import {NotificationManager} from 'react-notifications';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.showList = () => {
            return this.props.posts.map((item)=> {
                return (
                    <div key={item.id}>
                        <button onClick={()=>this.deletePost(item)}>delete</button>
                        <Link to='./details'>
                            <li onClick={()=>this.showDetails(item)} className='post'>{item.text} | Created {item.date}</li>
                        </Link>
                    </div>
                )
            });
        };
        this.showDetails = (item) => {
            NotificationManager.info('See details of post');
            this.props.showDetails(item)
        };
        this.deletePost = (item) => {
            this.props.deletePost(item);
            NotificationManager.error('The post is deleted','Post deleting');
        };
    }
    render() {
        return (
                <div className="taskList">{this.showList()}
                </div>
        );
    }
}
const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    deletePost,
        showDetails
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
