import _ from 'lodash';
import React, { Component } from 'react';
//Connecting with the connect redux helper 
import { connect } from 'react-redux';
// Link is identical to an achor tag in html
// helps navigate from different pages/components
import { Link } from 'react-router-dom';
// importing action creator into this component
import { fetchPosts } from '../actions';


class PostIndex extends Component {
    // Fires once, after initial render has occurred or shown on the screen
    componentDidMount() {
        this.props.fetchPosts();
    }


    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }


    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { posts: state.posts };
}


// Wire-up the connect helper
export default connect(mapStateToProps, { fetchPosts }) (PostIndex);