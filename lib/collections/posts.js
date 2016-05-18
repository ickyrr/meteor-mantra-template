import {Mongo} from 'meteor/mongo';
import {Astro} from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');

export default Post = Astro.Class.create({
  name: 'Post',
  collection: Posts,
  fields: {
    title: String,
    content: String,
    author: String,
    featured: {
      type: String,
      optional: true,
      default() {
        return null;
      }
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt',
    }
  }
});
