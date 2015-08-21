Template.body.helpers({
    allPizzas: function() {
        return Pizzas.find({}, {sort: {votes: -1}});
    }
});

Template.body.events({
    'submit .add-pizza': function(event, template) {
        event.preventDefault();
        var text = event.target.flavor.value;
        Meteor.call('addPizza', text);
        event.target.flavor.value = '';
    }
});

Template.pizza.events({
    'click .yep': function(event, template) {
        event.preventDefault();
        Meteor.call('increaseVote', this._id);
    },

    'click .nope': function(event, template) {
        event.preventDefault();
        Meteor.call('decreaseVote', this._id);
    }
});
