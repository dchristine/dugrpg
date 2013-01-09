game.Bush = BaseEntity.extend({
    initialize: function () {
        _.bindAll(this);
        var bushType = Crafty.math.randomInt(1, 2);

        var entity = Crafty.e("2D, Canvas, solid, bush" + bushType);

        this.set('entity', entity);
    }
});