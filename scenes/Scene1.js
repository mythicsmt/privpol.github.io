class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.preload.image("tiles", "images/tiles.png");
    }

    create() {
        this.background = this.add.image(0, 0, "tiles");
        this.background.setOrigin(0, 0);

        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}