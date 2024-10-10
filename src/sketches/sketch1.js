
import bgImgPath from '../assets/images/pagetexture_cleaned.png';  // Import the image file

let img;

const sketch = (p) => {
    p.preload = () => {
        img = p.loadImage(bgImgPath);  // Load the image
    };

    p.setup = () => {
        const canvas = p.createCanvas(img.width, img.height); // Create a canvas
        canvas.id('MyCanvas'); // Set id of the canvas
        canvas.parent('test'); // Attach canvas to the div with id "test"
        p.background(255);

        // Display the image
        p.image(img, 0, 0);
    };

    p.draw = () => {
        // Example draw code: Draw a circle that follows the mouse
        p.fill(100);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default sketch;