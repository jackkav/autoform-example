if (Meteor.isClient) {
  AutoForm.addHooks(['cmForm'], {
    onSuccess: function () {
      FlashMessages.sendSuccess("Added!", { hideDelay: 2000 });
    }//,
    // before:{
    //   insert:  function(doc){
    //     doc.publisherId = 'QTdA7bsMZRAn5faur';
    //     console.log(doc);
    //     return doc;
    //   }
   //}
  }, true);
  // counter starts at 0
  Session.setDefault('counter', 0);
  //FlashMessages.sendError("Message", { hideDelay: 2000 });
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  Template.list.helpers({
    books: function () {
      return Books.find();
    }
  });


  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);


    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


