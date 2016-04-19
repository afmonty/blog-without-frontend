import Backbone from 'backbone';


const PostModel = Backbone.Model.extend({
	defaults: {
		id: '',
		title: '',
		body: '',
		author: '',
		createdAt: '',
		updatedAt: ''
	},
	urlRoot: 'api/v1/post',
	idAttribute: 'id'
});

export default PostModel;