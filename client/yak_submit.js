Template.yaksSubmit.events({
  'submit .yaksSubmitForm': function(event) {
    event.preventDefault();
    var yak = event.target.yak.value; // get yak value
    // check if the value is empty
    if (yak == "") {
      alert("You can’t insert empty yak. Try to write something funny instead.");
    } else {
      Meteor.call('yakInsert', yak);
      Router.go('yaksList');
    }
  }
});