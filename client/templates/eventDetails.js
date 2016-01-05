Template.eventDetails.onCreated(function() {
  Session.setDefault('modalData', null);
});

Template.eventDetails.helpers({
  event: function() {
    var data = Session.get('modalData');
    if(data && data.id) {
      var event = Events.findOne(data.id);
      if (event.address == "undefined") {
        event.address = "Please check link below."
      }
      return event;
    }
    return null;
  }
});

Template.eventDetails.events({
  'click .modal__close': function (e) {
    Session.set('modalData', null);
  }
});
