Meteor.publish('eventData', function(){
  return Events.find();
});
