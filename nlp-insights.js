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
  },

  category:{
    type: [String],
    label: "Category",
    optional:true
  }
});

Events.attachSchema(Schemas.Event);

if (Meteor.isClient) {


  Template.body.events({
      "submit .search-zip": function (event) {
         //Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var zipNum = event.target.text.value;
        console.log(zipNum);

        Meteor.subscribe("eventData", zipNum);

        // Clear form
        event.target.text.value = "";
      }
    });

  Template.body.helpers({
    events: function(text) {
      return Events.find();
    }
  });

}

if (Meteor.isServer) {

  Meteor.publish('eventData', function(zipNum){
    console.log("Zipnum is" + zipNum);
    return Events.find({zip: zipNum});

  });

  // Meteor.methods({
 //    eventbriteDataGet: function(){
 //     this.unblock();
 //     return Meteor.http.call("GET", "https://www.eventbriteapi.com/v3/events/search/?q=music&location.address=Seattle&token=MO5AQ24HAYLNBP7L5WLE");
 //   },
 //    //don't forget to put comma after each method
 //
 //    eventfulDataGet: function(){
 //     this.unblock();
 //     return Meteor.http.call("GET", "http://api.eventful.com/json/events/search?l=Seattle&app_key=C5VJScp667pVNMHB&keywords=story+time+evening+music");
 //   },
 //
    // meetupDataGet: function(){
    //   this.unblock();
    //   return Meteor.http.call("GET", "https://api.meetup.com/2/open_events.json?zip=98109&time=,2m&key=595675274d4211175b522771323d075");
    // }
 //    brownPaperTicketDataGet: function(){
 //     this.unblock();
 //     return Meteor.http.call("GET", "https://www.brownpapertickets.com/api2/eventlist/?id=KxsUrh2jzn");
 //    }
 // });

 // Meteor.startup(function () {
 //    Meteor.call("eventbriteDataGet", function(error, result){
 //      if(error) console.log("The error is " + error)
 //      var events = JSON.parse(result.content);
 //      var eventData = events.events;
 //      for(var i = 0; i < eventData.length -1; i++){
 //        if(eventData[i].url != undefined){
 //        Events.insert({
 //          name: eventData[i].name.text,
 //          description: eventData[i].description.text,
 //          address: "Seattle",
 //          time: eventData[i].start.local,
 //          url: eventData[i].url,
 //          city: "Seattle",
 //          state: "WA",
 //          zip: "98101-98199",
 //          company_name: "Eventbrite"
 //        });
          //}
 //     }
 //    });
 //
 //    Meteor.call("eventfulDataGet", function(error, result){
 //      if(error) console.log("The error is " + error);
 //      var events = JSON.parse(result.content);
 //      var eventData = events.events.event;
 //      for(var i = 0; i < eventData.length -1; i++){
 //        if(eventData[i].url != undefined){
   //        Events.insert({
   //          name: eventData[i].title,
   //          description: eventData[i].description,
   //          address: eventData[i].venue_address,
   //          time: eventData[i].start_time,
   //          url: eventData[i].venue_url,
   //          city: eventData[i].city_name,
   //          state: eventData[i].region_abbr,
   //          zip: eventData[i].postal_code,
   //          company_name: "Eventful"
   //        });
          //}
 //      }
 //    });
 //
 //    Meteor.call("brownPaperTicketDataGet", function(error, result){
 //     if(error) console.log("The error is " + error);
 //     console.log(result);
 //   });

 // Meteor.call("meetupDataGet", function(error, result){
 //      if(error) console.log("The error is " + error);
 //      result = JSON.parse(result.content);
 //      var events = result.results;
 //       console.log(events);
 //
 //      for(var i = 0; i < events.length -1; i++){
 //
 //          if(events[i].venue == undefined){
 //
 //           var dateTime = new Date(events[i].time);
 //           var day = dateTime.getDate();
 //           var month = dateTime.getMonth();
 //           var year = dateTime.getFullYear();
 //           var hour = dateTime.getHours();
 //           var minute = dateTime.getMinutes();
 //
 //           var dates = day+ " "+ month + " " + year;
 //           var minuteBuilder = function(minute){
 //             if (minute == 0) minute = "00";
 //
 //             return  minute;
 //           }
 //           var minutes = minuteBuilder(minute);
 //           var times = hour + ":" + minutes;
 //
 //           Events.insert({
 //             name: events[i].name,
 //             description: events[i].description,
 //             time: times,
 //             date: dates,
 //             company_name: "Meetup",
 //             category:[]
 //           });
 //
 //         }
 //
 //         if(events[i].venue != undefined){
 //
 //           var dateTime = new Date(events[i].time);
 //           var day = dateTime.getDate();
 //           var month = dateTime.getMonth();
 //           var year = dateTime.getFullYear();
 //           var hour = dateTime.getHours();
 //           var minute = dateTime.getMinutes();
 //
 //          var dates = day+ " "+ month + " " + year;
 //           var minuteBuilder = function(minute){
 //             if (minute == 0) minute = "00";
 //
 //             return  minute;
 //           }
 //           var minutes = minuteBuilder(minute);
 //           var times = hour + ":" + minutes;
 //
 //           Events.insert({
 //             name: events[i].name,
 //             description: events[i].description,
 //             address: events[i].venue['address_1'],
 //             time: times,
 //             date: dates,
 //             url: events[i]["event_url"],
 //             city: events[i].venue.city,
 //            state: events[i].venue.state,
 //            zip: events[i].venue.zip,
 //           company_name: "Meetup",
 //           category:[]
 //          });
 //        }
 //        }
 //    });
 //
 //
 // });
}
