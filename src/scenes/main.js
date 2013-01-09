Crafty.scene("main", function () {
    var elements = [
        "src/entities/grass.js",
        "src/entities/bush.js",
        "src/entities/player.js",
        "src/components/animations.js",
        "src/components/controls.js",
        "src/entities/sword.js",
        "src/components/swordAnimation.js",
        "src/components/compPlaceholder.js"
    ];

    require(elements, function () {
        generateMap();

        var player1 = new game.Player().configureControls("left", 3, 40, 205, "player1").animate();
        var player2 = new game.Player().configureControls("right", 3, 40, 105, "player2").animate();
    });

    function generateMap() {
        for (var i = 0; i < 50; i++) {
            for (var j = 0; j < 20; j++) {
                var grass = new game.Grass().getEntity();
                grass.attr({ x: i * 16, y: j * 24 });

                if (i === 0 || i === 49 || j === 0 || j === 19) {
                    var bush = new game.Bush().getEntity();
                    bush.attr({ x: i * 16, y: j * 24, z: 1 });
                }
            };
        };
    };
});