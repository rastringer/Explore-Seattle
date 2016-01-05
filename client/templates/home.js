var searchText = '';
var userCategories=[];
var dateInfo = '';

Template.home.events({
  'submit .search-zip': function (event) {
    event.preventDefault();
    searchText = event.target.text.value;
    userCategories = categoryBuild(searchText);
    $(".date-form").css('visibility', 'visible');
  },

  'submit .date-pick-input': function (event){
    event.preventDefault();
    dateInfo = $('#test').val();
    console.log(dateInfo);

    Meteor.subscribe('eventData', userCategories, dateInfo);
  }
});
