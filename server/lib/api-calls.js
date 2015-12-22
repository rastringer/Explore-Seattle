callApi = function() {
    Meteor.call("eventbriteDataGet", function(error, result){
        if(error) console.log("The error is " + error)

        console.log("Pulling eventbrite data");
        var events = JSON.parse(result.content);
        var eventData = events.events;

        for(var i = 0; i < eventData.length -1; i++){
          if(eventData[i].url != undefined)

            var dateTime = new Date(eventData[i].start.local);

            var dateTime = moment(eventData[i].start.local);
            var fullDate = dateTime.format('YYYY-MM-DD');
            var time = dateTime.format('hh:mm a');

            var titleToLowerCase = eventData[i].name.text.toLowerCase();
            var title = titleToLowerCase.charAt(0).toUpperCase() + titleToLowerCase.slice(1);

          var categories = categorizer(title, eventData[i].description.text);
          Events.insert({
            name: title,
            description: eventData[i].description.text,
            address: "Seattle",
            time: time,
            date: fullDate,
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

             var dateTime = moment(eventData[i].start_time);
             var fullDate = dateTime.format('YYYY-MM-DD');
             var time = dateTime.format('hh:mm a');

             var categories = categorizer(eventData[i].title, eventData[i].description);

           Events.insert({
             name: eventData[i].title,
             description: eventData[i].description,
             address: eventData[i].venue_address,
             date: fullDate,
             time: time,
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
        var eventData = result.results;

        for(var i = 0; i < eventData.length -1; i++){
           if(eventData[i].venue != undefined){
             var dateTime = moment(eventData[i].time);
             var fullDate = dateTime.format('YYYY-MM-DD');
             var time = dateTime.format('hh:mm a');

             var categories = categorizer(eventData[i].name, eventData[i].description);

             Events.insert({
               name: eventData[i].name,
               description: eventData[i].description,
               address: eventData[i].venue['address_1'],
               time: time,
               date: fullDate,
               url: eventData[i]["event_url"],
               city: eventData[i].venue.city,
              state: eventData[i].venue.state,
              zip: eventData[i].venue.zip,
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
