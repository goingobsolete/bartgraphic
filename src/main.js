import p5 from 'p5';
import './styles.css';  // Import the CSS file
import { preload, fonts } from './data.js';  // Import the preload function and assets

new p5((p) => {
    p.preload = () => {
        // Call the preload function with the p5 instance
        preload(p);
    };

    p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        canvas.id('MyCanvas'); // Set id of the canvas
        canvas.parent('test'); // Attach canvas to the div with id "test"
        p.background(200);

        // Use the preloaded font
        p.textFont(fonts.textFont);
        p.textSize(32);
        p.fill(0);
        p.text('Hello, world!', 10, 30);
    };

    p.draw = () => {
        p.background(200);
        // Example draw code: Draw a circle that follows the mouse
        p.fill(100);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
});