import $ from 'jquery';
import Backbone from 'backbone';
import {globalErrorHandler, sync} from './sync';

$.ajaxSetup({
	error: globalErrorHandler,
	headers: { 
        Accept : 'application/json, text/javascript'
    }
});
Backbone.sync = sync;

import React from 'react';
import ReactDOM from 'react-dom';
import BlogPostList from './components/BlogPostList';
//import Preview from './components/Preview';

//ReactDOM.render(<BlogPostList />, document.querySelector('main'));

ReactDOM.render(
    React.createElement(BlogPostList),
    document.querySelector('main'));