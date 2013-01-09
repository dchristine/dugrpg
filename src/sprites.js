game.Sprites = Backbone.Model.extend({
    initialize: function () {
        _.bindAll(this);

        this.images = {
            'bomberman': {
                'file': 'web/images/sprite.png',
                'width': 16,
                'height': 24,
                'elements': {
                    'grass1': [0, 0],
                    'grass2': [1, 0],
                    'grass3': [2, 0],
                    'grass4': [3, 0],
                    'bush1': [0, 1],
                    'bush2': [1, 1],
                    'link': [0, 2]
                }
            },
            'swordEnt': {
                'file': 'web/images/sword.png',
                'width': 5,
                'height': 13,
                'elements': {
                    'sword': [0, 0]
                }
            }
        };
    },
    create: function (key) {
        if (key != undefined) {
            element = this.get('images')[key];
            if (element['height'] == undefined)
                Crafty.sprite(element['width'], element['file'], element['elements']);
            else
                Crafty.sprite(element['width'], element['height'], element['file'], element['elements']);

            return true;
        };

        _.each(this.images, function (element, k) {
            if (element['height'] == undefined)
                Crafty.sprite(element['width'], element['file'], element['elements']);
            else
                Crafty.sprite(element['width'], element['height'], element['file'], element['elements']);
        });
    },
    getPaths: function () {
        var array = [], i = 0;
        _.each(this.images, function (element, key) {
            array[i] = element['file'];
            i++;
        });

        return array;
    }
});