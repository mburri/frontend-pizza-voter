Template.body.helpers({
    allPizzas: function() {
        return Pizzas.find();
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
