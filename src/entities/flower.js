game.Flower = BaseEntity.extend({
    initialize: function () {
        var entity = Crafty.e("2D, Canvas, enemy, flower");

        this.set('entity', entity);
    }
});