import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios'; 
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul style={{backgroundColor: '#613346'}}>
                            <li><NavLink 
                                exact 
                                to="/"
                                activeClassName="my-active"
                                // inline styling
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Home</NavLink></li>
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
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    {/* flexible path */}
                    <Route path="/:postId" exact component={FullPost} />
                </Switch>   
            </div>
        );
    }
}

export default Blog;