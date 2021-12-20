class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        //this.load.image("tiles", "images/tiles.png");

        this.load.spritesheet("tiles", "images/tiles.png", {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet("character", "images/character.png", {
            frameWidth: 16,
            frameHeight: 22
        });
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}