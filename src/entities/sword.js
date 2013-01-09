game.Sword = BaseEntity.extend({
    attackKey: null,
    blockKey: null,
    blocking: false,

    initialize: function () {
        _.bindAll(this);
        var model = this;

        var entity = Crafty.e("2D, Canvas, Collision, sword, swordAnimation, WiredHitBox, Keyboard")
            .collision();

        model.set({ 'entity': entity });
    }
});