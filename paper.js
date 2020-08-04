class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.body = Bodies.circle(width/6, 200, 20, { restitution:0.3, isStatic:false, density:1.2});

        World.add(world, this.body);

    }
    display() {

        ellipseMode(RADIUS);

        ellipse(this.body.position.x, this.body.position.y, 20, 20);

    }
}