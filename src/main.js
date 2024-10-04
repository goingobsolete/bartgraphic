import p5 from 'p5';

new p5((p) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(200);
    };

    p.draw = () => {
        p.background(200);
        // Example draw code: Draw a circle that follows the mouse
        p.fill(100);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
});