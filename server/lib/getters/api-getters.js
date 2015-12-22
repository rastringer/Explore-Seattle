Meteor.methods({
 eventbriteDataGet: function(){
  this.unblock();
  return Meteor.http.call("GET", "https://www.eventbriteapi.com/v3/events/search/?location.address=Seattle&token=MO5AQ24HAYLNBP7L5WLE");
},
//    //don't forget to put comma after each method

 eventfulDataGet: function(){
  this.unblock();
  return Meteor.http.call("GET", "http://api.eventful.com/json/events/search?l=Seattle&app_key=C5VJScp667pVNMHB&keywords=story+time+evening+music");
},
//
 meetupDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "https://api.meetup.com/2/open_events.json?zip=98109&time=,2m&key=595675274d4211175b522771323d075");
 },
//
//   strangerDataGet: function(){
//     this.unblock();
//     return Meteor.http.call("GET", "https://www.kimonolabs.com/api/6wwmwl96?apikey=CsvMSUMXQ0LnvH3iCKe5COvVibwBF9hR");
//   }
});
