searchText = "";
userCategories=[];
dateInfo = "";
Meteor.subscribe('eventData');


Template.home.events({
    "submit .search-zip": function (event) {
       //Prevent default browser form submit
      event.preventDefault();
      Session.set('userCategories', []);
      searchText = event.target.text.value;
      console.log("Search text is " + searchText);
      userCategories = categoryBuild(searchText);
      console.log(userCategories);
      Session.set('getEvents', userCategories);
      $(".date-form").css('visibility', 'visible');

    }
  });

Template.home.events({
  // "keypress .date-pick-input": function (event){
  //   event.preventDefault();
  //   Session.set('dateInfo', "");
  //   dateInfo = $('#date').val();
  //   console.log(dateInfo);
  //
  //   Session.set('getEvents',dateInfo);
  //
  // },

  "submit .date-pick-input": function (event){
    event.preventDefault();
    Session.set('dateInfo', "");
    dateInfo = $('#my-datepicker').val();
    console.log(dateInfo);

    Session.set('getEvents',dateInfo);

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

Template.lists.helpers({
  filteredEvents: function(){if(Session.get('getEvents')){
    console.log("Date info is " + dateInfo);

      if(userCategories.length > 1){
        console.log("Categories are " + userCategories[0] + " and " + userCategories[1]);


      return  Events.find({
        $and:[{date:dateInfo},{$or: [ { category: userCategories[0]},{ category: userCategories[1]}]}]});
      }

      if(userCategories.length == 1){
        console.log("Categories are " + userCategories[0]);
        return Events.find({
          $and:[
              {date:dateInfo}, {category:userCategories[0]}]});

      }
  }
}
  });

Template.home.rendered = function() {
  $('#my-datepicker').datepicker({
    format: 'yyyy-mm-dd',
    container: '.date-pick-input',
    autoclose: true,
    todayHighlight: true
  });
};
