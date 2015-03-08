var EventDispatcher = _.extend({}, Backbone.Events)

/*
  Creates a generic object literal. It should have several properties:

  - counter: should start at 0
  - switch: should start as false
  - amplify: should be a function that doesnt do anything ("no-op")
*/
var dataObject = {
  counter: 0,
  switch: false,
  amplify: function() {}
}


/* ---------
  Write code that listens to the "addition" event on the EventDispatcher
  It adds 1 to the dataObject.counter property
--------- */

/* TODO */
EventDispatcher.listenTo(EventDispatcher, "addition", function(){dataObject.counter += 1})

/* ---------
  Write code that listens to the "flick" event on the EventDispatcher
  It changes the value of dataObject.switch..
    If true, becomes false
    If false, becomes true
--------- */

/* TODO */

EventDispatcher.listenTo(EventDispatcher, "flick", function(){
  !dataObject.switch
})
/* ---------
  Write code that listens to the "siren" event on the EventDispatcher
  It executes the dataObject.amplify function
--------- */

/* TODO */
EventDispatcher.listenTo(EventDispatcher, "siren", function(){
  dataObject.amplify
})

/* ---------
  Write code that listens to the "change-amplify" event on the EventDispatcher
  It changes the dataObject.amplify property to the value passed in
    via the event's parameter
--------- */

/* TODO */
EventDispatcher.listenTo(EventDispatcher, "change-amplify", function(hello){
  dataObject.amplify === hello
})

