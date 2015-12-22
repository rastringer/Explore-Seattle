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


      Meteor.call("strangerDataGet", function(error, result){
           if(error) console.log("The StrangerDataGet error is " + error)
           console.log("Pulling stranger data");

           var events = JSON.parse(result.content);
           var eventData = events.results.collection1;

           for(var i = 0; i < eventData.length -1; i++){

             var dateSlicer = function(dateMonth){
                var date = dateMonth.slice(-2);
                return date;
              };

              var monthSlicer = function(dateMonth){
                 var month = dateMonth.slice(0,3);
                 return month;
               };

               var getDateNum = function(dateMonth){
                 var dateOff = dateSlicer(dateMonth);

                 for(var i = 1; i < 10; i++){
                   if (dateOff == i){
                     dateOff = "0" + i;
                   }
                 }
                 return dateOff;
               };

              var getMonthNum = function(dateMonth){
                var monthNum = monthSlicer(dateMonth);

                if(monthNum == "Jan"){
                  monthNum = '01';
                }

                if(monthNum =="Feb"){
                  monthNum = '02';
                }

                if(monthNum =="Mar"){
                  monthNum = '03';
                }

                if(monthNum =="Apr"){
                  monthNum = '04';
                }

                if(monthNum =="May"){
                  monthNum = '05';
                }

                if(monthNum =="Jun"){
                  monthNum = '06';
                }

                if(monthNum =="Jul"){
                  monthNum = '07';
                }

                if(monthNum =="Aug"){
                  monthNum = '08';
                }

                if(monthNum =="Sep"){
                  monthNum = '09';
                }

                if(monthNum =="Oct"){
                  monthNum = '10';
                }

                if(monthNum =="Nov"){
                  monthNum ='11';
                }

                if(monthNum == "Dec"){
                  monthNum = '12';
                }

                return monthNum;
              };

               var getYear = function(monthNum){
                 var year;
                 if(monthNum == 12){
                   return year = 2015;
                 }

                 return year = 2016;
               };

               var days = getDateNum(eventData[i].monthDay);
               var months = getMonthNum(eventData[i].monthDay);
               var years = getYear(months);

               var fullDate = years + "-" + months + "-" + days;



              var categories = categorizer(eventData[i].name, eventData[i].description);

             Events.insert({
               name: eventData[i].name,
               description: eventData[i].description,
               address: eventData[i].address,
               time: eventData[i].time,
               date: fullDate,
               url: eventData[i].url,
               city: eventData[i].city,
               state: eventData[i].state,
               zip: eventData[i].zip,
               company_name: "Seattle Stranger",
               category:categories,

             });
           };
        //end stranger call
         });
  };
