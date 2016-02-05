Meteor.publish('allPosts', function() {
  return Posts.find({});
});

Meteor.publish('singlePost', function() {
  return Posts.find({_id: postId});
});
