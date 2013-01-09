game.Player = BaseEntity.extend({
    attackKey: null,
    blockKey: null,
    blocking: false,

    initialize: function () {
        _.bindAll(this);
        var model = this;

        var entity = Crafty.e("2D, Canvas, Collision, link, solid, Controls, WiredHitBox, animations, Keyboard")
            .collision();

        model.set({ 'entity': entity });
    },

    configureControls: function (direction, speed, x, y, className) {
        var entity = this.getEntity();
        var keys;

        if (direction == "left") {
            keys = entity.leftControls(speed);
        } else {
            keys = entity.rightControls(speed);
        }

        entity.attr({ x: x, y: y, z: 1 });

        entity.attackKey = keys["attackKey"];
        entity.blockKey = keys["blockKey"];

        entity.addComponent(className);

        return entity;
    }
});