const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    nom: {type: String, required: true},
     email: { type: String, required: true},
     message: {type:String, required: true}
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
