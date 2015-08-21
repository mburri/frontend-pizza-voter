Meteor.methods({
    addPizza:function(text){
        if (!text) {
            throw new Meteor.Error('please specify a flavor');
        }
        Pizzas.insert({
            flavor: text,
            votes: 0,
            createdAt: new Date()
        });
    },

    increaseVote: function(id) {
        if(!id) {
            throw new Meteor.Error('missing id');
        }

        Pizzas.update({_id: id}, {$inc: {votes: 1}});
    },

    decreaseVote: function(id) {
        if(!id) {
            throw new Meteor.Error('missing id');
        }

        Pizzas.update({_id: id}, {$inc: {votes: -1}});
    }
});
