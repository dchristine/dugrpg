Crafty.c('animations', {
    animate: function () {
        var player = this;
        var standing = true;
        var animateDirection = "";
        var blockDirection = "";
        var attacking = false;

        var blockKey = player.blockKey;
        var attackKey = player.attackKey;

        player.requires("SpriteAnimation, Collision, Grid")
            .animate("stand_left", 0, 4, 0)
            .animate("walk_left", 0, 4, 8)
            .animate("block_stand_left", 9, 3, 9)
            .animate("block_left", 9, 3, 17)
            .animate("stand_right", 0, 3, 0)
            .animate("walk_right", 0, 3, 8)
            .animate("block_stand_right", 9, 2, 9)
            .animate("block_right", 9, 2, 17)
            .animate("stand_up", 0, 5, 0)
            .animate("walk_up", 0, 5, 8)
            .animate("block_stand_up", 0, 7, 0)
            .animate("block_up", 0, 7, 7)
            .animate("stand_down", 0, 2, 0)
            .animate("walk_down", 0, 2, 8)
            .animate("block_stand_down", 0, 6, 0)
            .animate("block_down", 0, 6, 8)
            .bind("NewDirection",
            function (direction) {
                if (direction.x < 0) {
                    determineAction("left");
                }
                if (direction.x > 0) {
                    determineAction("right");
                }
                if (direction.y < 0) {
                    determineAction("up");
                }
                if (direction.y > 0) {
                    determineAction("down");
                }
                if (!direction.x && !direction.y) {
                    if (player.blocking) {
                        player.stop().animate("block_stand_" + blockDirection, 10, 1);
                    } else {
                        player.stop().animate("stand_" + animateDirection, 10, 1);
                    }

                    standing = true;
                }
            }).bind('KeyDown', function (e) {
                if (e.key == blockKey) {
                    block(true);
                }

                if (e.key == attackKey) {
                    attack();
                }
            }).bind('KeyUp', function (e) {
                if (e.key == blockKey) {
                    block(false);
                }
            }).bind('Moved', function (from) {
                if (this.hit('solid')) {
                    this.attr({ x: from.x, y: from.y });
                }
            });

        function determineAction(direction) {
            if (player.blocking) {
                if (!player.isPlaying("block_" + blockDirection)) {
                    player.stop().animate("block_" + blockDirection, 30, -1);
                }
                animateDirection = direction;
                standing = false;
                return;
            }
            if (!player.isPlaying("walk_" + direction)) {
                player.stop().animate("walk_" + direction, 10, -1);
                animateDirection = direction;
                standing = false;
            }
        };

        function block(pressed) {
            // Can't block and attack at the same time
            if (pressed && attacking) {
                return;
            }

            if (pressed) {
                player.stop().multiway(1, { W: -90, S: 90, D: 0, A: 180 });
                if (standing) {
                    player.animate("block_stand_" + animateDirection, 10, 1);
                } else {
                    player.animate("block_" + animateDirection, 30, -1);
                }
                blockDirection = animateDirection;
            } else {
                player.stop().multiway(3, { W: -90, S: 90, D: 0, A: 180 });
                if (standing) {
                    player.animate("stand_" + animateDirection, 10, 1);
                } else {
                    player.animate("walk_" + animateDirection, 10, -1);
                }
            }

            player.blocking = pressed;
        };

        function attack() {
            if (player.blocking || player.attacking) {
                return;
            }

            attacking = true;

            var sword = new game.Sword().getEntity();
            sword.attr({ x: player.x, y: player.y + 20, z: 1 });
            player.attach(sword);
            sword.origin("center");

            window.setTimeout(function () { swing(sword); }, 250);
        }

        function swing(sword) {
            sword.flip("Y");
            sword.attr({ y: sword.y - 30 });
            window.setTimeout(function () { sword.destroy(); attacking = false; }, 100);
        }
    }
})