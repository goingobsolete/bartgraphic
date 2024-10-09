
const sketch = (p) => {
    p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        canvas.id('MyCanvas'); // Set id of the canvas
        canvas.parent('test'); // Attach canvas to the div with id "test"
        p.background(200);
    };

    p.draw = () => {
        p.background(200);
        // Example draw code: Draw a circle that follows the mouse
        p.fill(100);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default sketch;