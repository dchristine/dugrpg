Crafty.scene("loading", function () {
    var loadingText = Crafty.e("2D, Canvas, Text")
        .attr({ w: 500, h: 20, x: ((Crafty.viewport.width) / 2), y: (Crafty.viewport.height / 2), z: 2 })
        .text('Loading').textColor('#000').textFont({ 'size': '24px', 'family': 'Arial' });

    Crafty.load(game.sprites.getPaths(), function () {
        var elements = [
            "src/entities/base/BaseEntity.js",
            "src/scenes/main.js"
        ];

        require(elements, function () {
            loadingText.destroy();
            Crafty.scene('main');
        });
    });
});