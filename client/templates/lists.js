Template.lists.helpers({
  events: function(text) {
    return Events.find();
  }
});

Template.lists.events ({
  'click .content': function (e) {
    var id = e.target.parentElement.id;
    Session.set('modalData', {id: id});
  }
})
