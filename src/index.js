import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// shared across ALL project files
axios.interceptors.request.use(request => {
    console.log(request);
    // edit request config
    return request;
}, error => {
    console.log(error);
    // forward this to our request as written in component
    // can be handled again within component using catch method
    // locally: can do task eg. show sth on UI
    // globally: eg. log in log file that can be sent to server
    return Promise.reject(error);
    // this error is related to the actual request not being sent
    // due to wrong URL or no connection etc.
});

// interceptor to handle responses
axios.interceptors.response.use(response => {
    console.log(response);
    // edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

// how to remove interceptors
// axios.interceptors.request.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
