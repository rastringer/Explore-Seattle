searchText = "";
userCategories=[];
dateInfo = "";

Template.home.events({
    "submit .search-zip": function (event) {
       //Prevent default browser form submit
      event.preventDefault();
      searchText = event.target.text.value;
      console.log("Search text is " + searchText);
      userCategories = categoryBuild(searchText);
      console.log(userCategories);
      $(".date-form").css('visibility', 'visible');

    }
  });

Template.home.events({
  "submit .date-pick-input": function (event){
    event.preventDefault();
    dateInfo = $('#test').val();
    console.log(dateInfo);

    Meteor.subscribe('eventData', userCategories, dateInfo);

  }
});


// Template.home.events({
//     "submit .search-zip": function (event) {
//        //Prevent default browser form submit
//       event.preventDefault();
//
//       // Get value from form element
//       var zipNum = event.target.text.value;
//       console.log(zipNum);
//
//       Meteor.subscribe("eventData", zipNum);
//
//       // Clear form
//       event.target.text.value = "";
//     }
//   });
