Template.body.helpers({
    allPizzas: function() {
        return Pizzas.find({}, {sort: {votes: -1}});
    }
});

Template.body.events({
    'submit .add-pizza': function(event, template) {
        event.preventDefault();
        var text = event.target.flavor.value;
        Pizzas.insert({
            flavor: text,
            votes: 0
        });
        event.target.flavor.value = '';
    }
});

Template.pizza.events({
    'click .yep': function(event, template) {
        event.preventDefault();
        Pizzas.update({_id: this._id}, { $inc: {votes: 1}});
    },

    'click .nope': function(event, template) {
        event.preventDefault();
        Pizzas.update({_id: this._id}, { $inc: {votes: -1}});
    }
});
