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
    type: String,
    label: "Time",
    optional: true
  },
  date:{
    type: String,
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
    type: String,
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
/* Meteor.methods({
  eventbriteDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "https://www.eventbriteapi.com/v3/events/search/?&location.address=Seattle&token=MO5AQ24HAYLNBP7L5WLE");
  }, */


/*  eventfulDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "http://api.eventful.com/json/events/search?l=Seattle&app_key=C5VJScp667pVNMHB");
  },*/

  /*meetupDataGet: function(){
    this.unblock();
    return Meteor.http.call("GET", "https://api.meetup.com/2/open_events.json?zip=98109&time=,2m&key=595675274d4211175b522771323d075");
  },*/
/*  brownPaperTicketDataGet: function(){
   this.unblock();
   return Meteor.http.call("GET", "https://www.brownpapertickets.com/api2/eventlist/?keywords=wine+story&amp;e_city=Seattle&amp;id=KxsUrh2jzn");
  }*/
 });

 /*Meteor.startup(function () {
    Meteor.call("eventbriteDataGet", function(error, result){
      if(error) console.log("The error is " + error)
      var events = JSON.parse(result.content);
      var eventData = events.events;
      for(var i = 0; i < eventData.length -1; i++){
        if(eventData[i].url != undefined)
          var dateTime = new Date(eventData[i].start.local);
          var day = dateTime.getDate();
          var month = dateTime.getMonth() + 1;
          var year = dateTime.getFullYear();
          var hour = dateTime.getHours();
          var minute = dateTime.getMinutes();
          var dates = day + " "+ month + " " + year;
          var minuteBuilder = function(minute){
            if (minute == 0) minute = "00";
            return  minute;
          }
          var minutes = minuteBuilder(minute);
          var times = hour + ":" + minutes;

        Events.insert({
          name: eventData[i].name.text,
          description: eventData[i].description.text,
          address: "Seattle",
          time: times,
          date: dates,
          url: eventData[i].url,
          city: "Seattle",
          state: "WA",
          zip: "98101-98199",
          company_name: "Eventbrite"
        });
      };
    });
    */
/*   Meteor.call("eventfulDataGet", function(error, result){
      if(error) console.log("The error is " + error);
      var events = JSON.parse(result.content);
      var eventData = events.events.event;
      for(var i = 0; i < eventData.length -1; i++){
        if(eventData[i].url != undefined)
          var dateTime = new Date(eventData[i].start_time);
          var day = dateTime.getDate();
          var month = dateTime.getMonth() +1;
          var year = dateTime.getFullYear();
          var hour = dateTime.getHours();
          var minute = dateTime.getMinutes();
          var dates = day+ " "+ month + " " + year;
          var minuteBuilder = function(minute){
            if (minute == 0) minute = "00";
            return  minute;
          }
          var minutes = minuteBuilder(minute);
          var times = hour + ":" + minutes;
        Events.insert({
          name: eventData[i].title,
          description: eventData[i].description,
          address: eventData[i].venue_address,
          date: dates,
          time: times,
          url: eventData[i]["url"],
          city: eventData[i].city_name,
          state: eventData[i].region_abbr,
          zip: eventData[i].postal_code,
          company_name: "Eventful"
        })
      }
    })*/
    
    /*Meteor.call("meetupDataGet", function(error, result){
      if(error) console.log("The error is " + error);
      debugger;
    
      result = JSON.parse(result.content);
      var events = result.results;
      console.log(events[5]);
      for(var i = 0; i < events.length -1; i++){
        if(events[i].venue != undefined)
        Events.insert({
          name: events[i].name,
          description: events[i].description,
          address: events[i].venue['address_1'],
          url: events[i]["event_url"],
          city: events[i].venue.city,
          state: events[i].venue.state,
          zip: events[i].venue.zip,
          company_name: "Meetup"
        })
      }
    });*/

    /*Meteor.call("brownPaperTicketDataGet", function(error, result){
     if(error) console.log("The error is " + error);
     console.log(result);
   });*/

 });
}