import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios'; 
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from '../../containers/Blog/NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul style={{backgroundColor: '#613346'}}>
                            <li><NavLink 
                                exact 
                                to="/posts/"
                                activeClassName="my-active"
                                // inline styling
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to=
                            {{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                {/* order matters, new-post has to be above :postId */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/" component={Posts} /> */}
                    <Redirect from="/" to="/posts" />
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>   
            </div>
        );
    }
}

export default Blog;