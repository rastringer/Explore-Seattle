callApi = function() {
    Meteor.call("eventbriteDataGet", function(error, result){
        if(error) console.log("The error is " + error)

        console.log("Pulling eventbrite data");
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
            var titleToLowerCase = eventData[i].name.text.toLowerCase();
            var title = titleToLowerCase.charAt(0).toUpperCase() + titleToLowerCase.slice(1);

          var categories = categorizer(title, eventData[i].description.text);
          Events.insert({
            name: title,
            description: eventData[i].description.text,
            address: "Seattle",
            time: times,
            date: dates,
            url: eventData[i].url,
            city: "Seattle",
            state: "WA",
            zip: "98101",
            category: categories,
            company_name: "Eventbrite"
            });

        };
      });

      Meteor.call("eventfulDataGet", function(error, result){
         if(error) console.log("The error is " + error);

         console.log("Pulling evenful data");

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

             var categories = categorizer(eventData[i].title, eventData[i].description);

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
             category: categories,
             company_name: "Eventful"
           });

         }
       });


   Meteor.call("meetupDataGet", function(error, result){
        if(error) console.log("The error is " + error);
        console.log("Pulling meetup data");

        result = JSON.parse(result.content);
        var events = result.results;

        for(var i = 0; i < events.length -1; i++){
           if(events[i].venue != undefined){
             var dateTime = new Date(events[i].time);
             var day = dateTime.getDate();
             var month = dateTime.getMonth();
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

             var categories = categorizer(events[i].name, events[i].description);

             Events.insert({
               name: events[i].name,
               description: events[i].description,
               address: events[i].venue['address_1'],
               time: times,
               date: dates,
               url: events[i]["event_url"],
               city: events[i].venue.city,
              state: events[i].venue.state,
              zip: events[i].venue.zip,
             company_name: "Meetup",
             category:categories
            });
          }
        }
        //finish meetup
      });


      // Meteor.call("strangerDataGet", function(error, result){
      //      if(error) console.log("The StrangerDataGet error is " + error)
      //      console.log("Pulling stranger data");
      //
      //      var events = JSON.parse(result.content);
      //      var eventData = events.results.collection1;
      //
      //      for(var i = 0; i < eventData.length -1; i++){
      //
      //        var monthNumReturn = function(monthName){
      //          var monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
      //          'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      //
      //          return monthNames.indexOf(monthName);
      //        };
      //
      //        var yearReturn = function(){
      //          var time = new Date();
      //          var year = time.getFullYear();
      //          return year;
      //        };
      //
      //        var year = yearReturn()
      //        var monthNum = monthNumReturn(eventData[i].Month);
      //        var dates = eventData[i].Day + " " + monthNum + " " +  year;
      //        var neighborhood = eventData[i].Venue.text + " in " + eventData[i].Neighborhood;
      //
      //        Events.insert({
      //          name: eventData[i].Title.text,
      //          description: "Please see the url for a description",
      //          address: neighborhood,
      //          time: eventData[i].Time,
      //          date: dates,
      //          url: eventData[i].Title.href,
      //          city: 'Seattle',
      //          state: 'WA',
      //          zip: '98101',
      //          company_name: "Seattle Stranger",
      //          category:[],
      //          venue_url: eventData[i].Venue.href,
      //          price: eventData[i].Price
      //
      //        });
      //      };
      //   //end stranger call
      //    });
  };


