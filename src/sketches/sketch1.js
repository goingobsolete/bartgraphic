
const sketch = (p) => {
    p.preload = () => {
        // Load any assets here
        p.bgImg = p.loadImage('src/assets/images/pagetexture_cleaned.png');
    }


    p.setup = () => {
        const canvas = p.createCanvas(p.bgImg.width, p.bgImg.height); // Create a canvas
        canvas.id('MyCanvas'); // Set id of the canvas
        canvas.parent('test'); // Attach canvas to the div with id "test"
        p.background(p.bgImg);
    };

    p.draw = () => {
        p.background(200);
        // Example draw code: Draw a circle that follows the mouse
        p.fill(100);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default sketch;