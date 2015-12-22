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

Template.lists.events ({
"click .content": function (e) {
  var id = e.target.parentElement.id;
  var event = Events.findOne(id);
  console.log(event);
  if (event.address == "undefined") {
    event.address = "Please check link below."
  };

  $('.content').append(
     '<input class="modal-state" id = "modal-1" type = "checkbox">' +
      '<div class="modal">' +
        '<div class="modal__inner">' +
          '<label class="modal__close" for="modal-1"></label>' +
          '<p class = "title-box inside">' + event.name + '</p>' +
          '<p class = "details-box inside"> Date and time: '  + event.date + ' , ' + event.time + '</p>' +
          '<p class = "details-box inside"> Address: ' + event.address + '</p>' +
          '<p class ="link inside"><a href=' + event.url + '> Open on ' + event.company_name + '</a></p>' +
          '<p>' + event.url + '</p>' +
          '<p class = "details-box inside" id = "description-title">Description:</p>' +
          '<p class = "details-info-box inside" id = "description">' + event.description + '</p>' +
        '</div>' +
       '</div>'
    );
  },
  "click .modal__close": function (e) {
    $( ".modal-state" ).remove();
    $('.modal').remove();
  }

})


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
