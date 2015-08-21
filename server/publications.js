Meteor.publish("pizzas", function(argument){
    return Pizzas.find();
});
