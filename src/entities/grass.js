game.Grass = BaseEntity.extend({
    initialize: function () {
        _.bindAll(this);
        var grassType = Crafty.math.randomInt(1, 4);

        var entity = Crafty.e("2D, Canvas, grass" + grassType);

        this.set('entity', entity);
    }
});