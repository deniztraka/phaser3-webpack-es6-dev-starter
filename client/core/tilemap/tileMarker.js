export class TileMarker extends Phaser.GameObjects.Graphics {
    constructor(scene) {
        super(scene);

        this.lineStyle(1, 0x000000, 1.0);
        this.fillStyle(0xffffff, 0.2);
        this.beginPath();

        // this.moveTo(0, -16);
        // this.lineTo(32, 0);
        // this.lineTo(0, 16);
        // this.lineTo(-32, 0);

        this.moveTo(32, 0);
        this.lineTo(64, 16);
        this.lineTo(32, 32);
        this.lineTo(0, 16);



        this.closePath();

        this.fillPath();
        this.strokePath();

        scene.sys.displayList.add(this);
    }
}