class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        //this.background = this.add.image(0, 0, "tiles");
        //this.background.setOrigin(0, 0);

        this.character = this.add.sprite(config.width / 2, config.height / 2, "character");

        this.anims.create({
            key: "character_walk",
            frames: this.anims.generateFrameNumbers({ start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1,
            hideOnComplete: false
        });

        this.character.play("character_walk");

        // this.add.text(20, 20, "Playing game", { 
        //     font: "25px Arial",
        //     fill: "yellow"
        // });
    }
}
