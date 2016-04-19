import Backbone from 'backbone';
import PostModel from '../models/jobs.js';

const PostCollection = Backbone.Collection.extend({
	model: PostModel,
	url:  '/api/v1/post'
});

export default new PostCollection();