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
