//we call this function only once, then all job does synced-cron
callApi();

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
