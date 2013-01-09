$(function () {
    // This is the namespace we'll use for the entire game, make it an event aggregator.
    var game = window.game = {};
    _.extend(game, Backbone.Events);

    game.Controller = Backbone.Collection.extend({
        initialize: function () {
            _.bindAll(this);

            Crafty.init(800, 480).canvas.init();

            require([
                    "src/sprites.js",
                    "src/config.js",
                    "/src/scenes/loading.js"
                ], function () {
                    // create some sprites
                    game.sprites = new game.Sprites();
                    game.sprites.create();

                    Crafty.scene("loading");
                });
        }
    });

    game.sprites;
    game.config;
    game.controller = new game.Controller();    
});