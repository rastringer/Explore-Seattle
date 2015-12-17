Events = new Mongo.Collection('events');

var Schemas = {};

Schemas.Event = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  time: {
    type: Number,
    label: "Time",
    optional: true
  },
  date:{
    type: Number,
    label: "Date",
    optional: true

  },
  address:{
    type: String,
    label: "Address",
    optional: true

  },
  url: {
    type: String,
    label: "Url",
    optional: true
  },
  city: {
    type: String,
    label:"City",
    optional: true
  },
  state: {
    type: String,
    label:"State",
    optional: true
  },
  zip:{
    type: Number,
    label: "Zip",
    optional: true

  },
  company_name: {
    type: String,
    label: "Company_Name",
    optional: true
  }
});

Events.attachSchema(Schemas.Event);

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
 Meteor.methods({
  eventbriteDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "https://www.eventbriteapi.com/v3/events/search/?q=chilling&location.latitude=47.6097&location.longitude=122.3331&location.within=10km&popular=true&token=MO5AQ24HAYLNBP7L5WLE");
  },

  eventfulDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "http://api.eventful.com/json/events/search?c=music&l=Seattle&app_key=C5VJScp667pVNMHB&keywords=childish+gambino");
  },

  meetupDataGet: function(){
    this.unblock();
    return Meteor.http.call("GET", "https://api.meetup.com/2/open_events.json?zip=98109&time=,2m&key=595675274d4211175b522771323d075");
  }

  brownPaperTicketDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "https://www.brownpapertickets.com/api2/eventlist/?id=KxsUrh2jzn");
  }
 });

 Meteor.startup(function () {
    // Meteor.call("eventbriteDataGet", function(error, result){
    //   if(error) console.log("The error is " + error);
    //   console.log(result.content);
    // });
    //
    // Meteor.call("eventfulDataGet", function(error, result){
    //   if(error) console.log("The error is " + error);
    //   console.log(result.body);
    // });
    //
    // Meteor.call("meetupDataGet", function(error, result){
    //   if(error) console.log("The error is " + error);
    //   debugger;
    //
    //   result = JSON.parse(result.content);
    //   var events = result.results;
    //   console.log(events);
    //   for(var i = 0; i < events.length -1; i++){
    //     if(events[i].venue != undefined)
    //     Events.insert({
    //       name: events[i].name,
    //       description: events[i].description,
    //       address: events[i].venue['address_1'],
    //       url: events[i]["event_url"],
    //       city: events[i].venue.city,
    //       state: events[i].venue.state,
    //       zip: events[i].venue.zip,
    //       company_name: "Meetup"
    //     })
    //   }
    // });

   //  Meteor.call("brownPaperTicketDataGet", function(error, result){
   //   if(error) console.log("The error is " + error);
   //   console.log(result);
   // });

 });
}
