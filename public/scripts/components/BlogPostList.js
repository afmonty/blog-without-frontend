import React from 'react';
import ReactDom from 'react-dom';
import Preview from 'Preview';




const BlogList = React.createClass({
	getInitialState: function(){
		return {
			posts: Post
		};
	},

	componentDidMount: function () {
		this.state.post.on('update', () => {
			this.setState({
				posts: this.state.Post
			});
		});
		this.state.Post.fetch();
	},


	render: function () {
		let BlogEntry = this.state.Post.map(function(val, index, array) {
    		return <div className = "post-preview-container">
    					 title={val.get('title')} 
	    				 body={val.get('body')}
	    				 author={val.get('author[vfirstName]')}
	    				createdAt={val.get('createdAt')} 
	    				</div>;
		});
		
		return <div>{BlogEntry}</div>
	}
	
});

export default BlogList;