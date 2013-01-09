Crafty.c("Controls", {
    init: function () {
        this.requires("Multiway");
    },

    leftControls: function (speed) {
        var attackKey = Crafty.keys.E;
        var blockKey = Crafty.keys.SPACE;

        this.multiway(speed, { W: -90, S: 90, D: 0, A: 180 });
        return {attackKey: attackKey, blockKey: blockKey};
    },

    rightControls: function (speed) {
        var attackKey = Crafty.keys.O;
        var blockKey = Crafty.keys.P;

        this.multiway(speed, { UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180 });
        return { attackKey: attackKey, blockKey: blockKey };
    }
})