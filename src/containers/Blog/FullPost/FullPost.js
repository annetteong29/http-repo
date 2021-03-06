import React, { Component } from 'react';
import axios from 'axios';
// import Spinner from '../../../components/UI/Spinner/Spinner';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props);
        // first time a single post is loaded from Posts
        this.loadData();
    }

    // will be executed again because of new props
    // so new match and params objects (among others)
    componentDidUpdate() {
        // second time a single post is loaded from Posts
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.postId) {
            if (!this.state.loadedPost || 
                    (this.state.loadedPost && (this.state.loadedPost.id !== +this.props.match.params.postId))) {
                axios.get('/posts/' + this.props.match.params.postId)
                .then(response => {
                    // console.log(response);
                    this.setState({loadedPost: response.data})
                });
            }
        }
        // parsing query parameters
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.postId)
        .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.postId ) {
            post = <p style={{ textAlign: 'center' }}>[FullPost] Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button 
                            onClick={this.deletePostHandler} 
                            className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;