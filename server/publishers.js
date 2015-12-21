Meteor.publish('eventData', function(zipNum){
  console.log("Zipnum is" + zipNum);
  return Events.find({zip: zipNum});

});
