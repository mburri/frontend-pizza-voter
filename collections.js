Pizzas = new Mongo.Collection("pizzas");
Pizzas.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});
