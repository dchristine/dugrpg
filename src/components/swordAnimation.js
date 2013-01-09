Crafty.c('swordAnimation', {
    init: function () {
        var sword = this;

        this.requires("SpriteAnimation, Collision, Tween, Grid")
            .onHit('player2', function (entity) {
                var enemy = entity[0].obj;

                if (!enemy.blocking) {
                    enemy.destroy();
                }
            });
    }
});