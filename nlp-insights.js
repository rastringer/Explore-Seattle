Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/about');

Router.route('/features');

Router.configure({
  layoutTemplate: 'main'
});

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
  },
  venue_url:{
    type: String,
    label: 'Venue_Url',
    optional:true
  },
  price:{
    type: String,
    label:"Price",
    optional: true
  }
});

Events.attachSchema(Schemas.Event);

if (Meteor.isClient) {


  Template.home.events({
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

  Template.lists.helpers({
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

   Meteor.methods({
    eventbriteDataGet: function(){
     this.unblock();
     return Meteor.http.call("GET", "https://www.eventbriteapi.com/v3/events/search/?q=music&location.address=Seattle&token=MO5AQ24HAYLNBP7L5WLE");
   },
 //    //don't forget to put comma after each method

    eventfulDataGet: function(){
     this.unblock();
     return Meteor.http.call("GET", "http://api.eventful.com/json/events/search?l=Seattle&app_key=C5VJScp667pVNMHB&keywords=story+time+evening+music");
   },

    meetupDataGet: function(){
      this.unblock();
      return Meteor.http.call("GET", "https://api.meetup.com/2/open_events.json?zip=98109&time=,2m&key=595675274d4211175b522771323d075");
    },

    strangerDataGet: function(){
      this.unblock();
      return Meteor.http.call("GET", "https://www.kimonolabs.com/api/cucerxs4?apikey=CsvMSUMXQ0LnvH3iCKe5COvVibwBF9hR");
    }
 });


  function callAPI () {
   //  Meteor.call("eventbriteDataGet", function(error, result){
   //      if(error) console.log("The error is " + error)
   //      var events = JSON.parse(result.content);
   //      var eventData = events.events;
   //      for(var i = 0; i < eventData.length -1; i++){
   //        if(eventData[i].url != undefined)
   //          var dateTime = new Date(eventData[i].start.local);
   //          var day = dateTime.getDate();
   //          var month = dateTime.getMonth() + 1;
   //          var year = dateTime.getFullYear();
   //          var hour = dateTime.getHours();
   //          var minute = dateTime.getMinutes();
   //          var dates = day + " "+ month + " " + year;
   //          var minuteBuilder = function(minute){
   //            if (minute == 0) minute = "00";
   //            return  minute;
   //          }
   //          var minutes = minuteBuilder(minute);
   //          var times = hour + ":" + minutes;

   //        Events.insert({
   //          name: eventData[i].name.text,
   //          description: eventData[i].description.text,
   //          address: "Seattle",
   //          time: times,
   //          date: dates,
   //          url: eventData[i].url,
   //          city: "Seattle",
   //          state: "WA",
   //          zip: "98101-98199",
   //          category: [],
   //          company_name: "Eventbrite"
   //        });
   //      };
   //    });

   //   Meteor.call("eventfulDataGet", function(error, result){
   //      if(error) console.log("The error is " + error);
   //      var events = JSON.parse(result.content);
   //      var eventData = events.events.event;
   //      for(var i = 0; i < eventData.length -1; i++){
   //        if(eventData[i].url != undefined)
   //          var dateTime = new Date(eventData[i].start_time);
   //          var day = dateTime.getDate();
   //          var month = dateTime.getMonth() +1;
   //          var year = dateTime.getFullYear();
   //          var hour = dateTime.getHours();
   //          var minute = dateTime.getMinutes();
   //          var dates = day+ " "+ month + " " + year;
   //          var minuteBuilder = function(minute){
   //            if (minute == 0) minute = "00";
   //            return  minute;
   //          }
   //          var minutes = minuteBuilder(minute);
   //          var times = hour + ":" + minutes;
   //        Events.insert({
   //          name: eventData[i].title,
   //          description: eventData[i].description,
   //          address: eventData[i].venue_address,
   //          date: dates,
   //          time: times,
   //          url: eventData[i]["url"],
   //          city: eventData[i].city_name,
   //          state: eventData[i].region_abbr,
   //          zip: eventData[i].postal_code,
   //          category: [],
   //          company_name: "Eventful"
   //        });

   //      }
   //    });


   // Meteor.call("meetupDataGet", function(error, result){
   //      if(error) console.log("The error is " + error);
   //      result = JSON.parse(result.content);
   //      var events = result.results;
   //      for(var i = 0; i < events.length -1; i++){
   //         if(events[i].venue != undefined){
   //           var dateTime = new Date(events[i].time);
   //           var day = dateTime.getDate();
   //           var month = dateTime.getMonth();
   //           var year = dateTime.getFullYear();
   //           var hour = dateTime.getHours();
   //           var minute = dateTime.getMinutes();

   //          var dates = day+ " "+ month + " " + year;
   //           var minuteBuilder = function(minute){
   //             if (minute == 0) minute = "00";
   //             return  minute;
   //           }
   //           var minutes = minuteBuilder(minute);
   //           var times = hour + ":" + minutes;

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
   //      }
   //      //finish meetup
   //    });


   //    Meteor.call("strangerDataGet", function(error, result){
   //         if(error) console.log("The StrangerDataGet error is " + error)
   //         console.log("new stranger data coming");

   //         var events = JSON.parse(result.content);
   //         var eventData = events.results.collection1;

   //         for(var i = 0; i < eventData.length -1; i++){

   //           var monthNumReturn = function(monthName){
   //             var monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
   //             'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   //             return monthNames.indexOf(monthName);
   //           };

   //           var yearReturn = function(){
   //             var time = new Date();
   //             var year = time.getFullYear();
   //             return year;
   //           };

   //           var year = yearReturn()
   //           var monthNum = monthNumReturn(eventData[i].Month);
   //           var dates = eventData[i].Day + " " + monthNum + " " +  year;
   //           var neighborhood = eventData[i].Venue.text + " in " + eventData[i].Neighborhood;

   //           Events.insert({
   //             name: eventData[i].Title.text,
   //             description: "Please see the url for a description",
   //             address: neighborhood,
   //             time: eventData[i].Time,
   //             date: dates,
   //             url: eventData[i].Title.href,
   //             city: 'Seattle',
   //             state: 'WA',
   //             zip: '98101',
   //             company_name: "Seattle Stranger",
   //             category:[],
   //             venue_url: eventData[i].Venue.href,
   //             price: eventData[i].Price

   //           });
   //         };
   //      //end stranger call
   //       });
  };

//we call this function only once, then all job does synced-cron
  // callAPI();

// calls callAPI() and adds synced-cron
// SyncedCron.add({
//     name: 'Update db every 24 hr',
//     schedule: function(parser) {
//       // parser is a later.parse object
//       //you can replace this value by minutes for testing
//       return parser.text('every 1 hour');
//     },
//     job: function() {
//       var dateTime = new Date();
//       var hour = dateTime.getHours();
//       if (hour=="00") {
//         Events.remove({});
//         callAPI();
//       }
//    }
//  });
//
// // Start Cronjobs
//   SyncedCron.start();
}
