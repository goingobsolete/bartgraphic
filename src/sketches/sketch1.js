// images
import bgImgPath from '../assets/images/pagetexture_cleaned.png';  // Import the image file

// fonts
import caslonSignPath from '../assets/fonts/LibreCaslonDisplay-Regular.ttf'; // Import the Display font file
import caslonBoldPath from '../assets/fonts/LibreCaslonText-Bold.ttf'; // Import the Bold font file
import caslonItalicPath from '../assets/fonts/LibreCaslonText-Italic.ttf'; // Import the Italic font file
import caslonRegularPath from '../assets/fonts/LibreCaslonText-Regular.ttf'; // Import the Regular font file

// modules
import clockCanvas from '../modulesClasses/clockCanvas.js'; // import clockCanvas class

//TODO: import city list from a json file OR from main.js post calculation
//TODO: import word list from a json file

//TODO: to change the date line
const locations = [
    {city: 'TOKYO', UTCoffMS: 0, IntitIndex: 0},
    {city: 'LOS ANGELES CALIFORNIA', UTCoffMS: 0, IntitIndex: 1},
    {city: 'WALL STREET', UTCoffMS: -5*60*60*1000, IntitIndex: 2},
    {city: 'ASNIÈRES-SUR-SEINE', UTCoffMS: 547999, IntitIndex: 3},
    {city: 'NAJAFĀBĀD', UTCoffMS: 1232760, IntitIndex: 4}
]

const wordlist = [
    {word: 'I', index: 0},
    {word: 'would', index: 1},
    {word: 'prefer', index: 2},
    {word: 'not', index: 3},
    {word: 'to.', index: 4},
]

//img variables
let img;

//offset variable
let utcOffSolar;

//calculate the index of the offset UTC
// let utcFirstIndex;

//Canvas array [canvas#, x (topL), y(topL)]]
let clockCanvasArray = [];

const sketch = (p) => {
    p.preload = () => {
        img = p.loadImage(bgImgPath);  // Load the image

        p.signFont = p.loadFont(caslonSignPath); // Load the font
        p.boldFont = p.loadFont(caslonBoldPath); // Load the font
        p.italicFont = p.loadFont(caslonItalicPath); // Load the font
        p.regularFont = p.loadFont(caslonRegularPath); // Load the font

        //TODO: load UTC solar offset
        //utcOffMs = await getUTCOffMs();
        utcOffSolar = 100; // example for development
    };

    p.setup = () => {
        const canvas = p.createCanvas(img.width, img.height); // Create a canvas
        canvas.id('MyCanvas'); // Set id of the canvas
        canvas.parent('test'); // Attach canvas to the div with id "test"
        p.background(255);

        // create array of fonts
        const fonts = {
            signFont: p.signFont,
            boldFont: p.boldFont,
            italicFont: p.italicFont,
            regularFont: p.regularFont
        };

        // Canvas placement calculations
        // diameter factor
        const dF = img.width / 10;
        // const heightOffset = p.height / 2;

        console.log(dF);

        // Size and placement calculations
        // const sizePlacement = [
        //     { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 0.75), topLy: (heightOffset - (dF * 1.5)) },
        //     { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 2.25), topLy: (heightOffset - (dF * 1.5)) },
        //     { canWidth: (dF * 2.5), canHeight: (dF * 5), topLx: (dF * 3.75), topLy: (heightOffset - (dF * 2.5)) },
        //     { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 5.25), topLy: (heightOffset - (dF * 1.5)) },
        //     { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 6.75), topLy: (heightOffset - (dF * 1.5)) }
        // ];

        const sizePlacement = [
            { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 0.75), topLy: 40 },
            { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 2.25), topLy: 40 },
            { canWidth: (dF * 2.5), canHeight: (dF * 5), topLx: (dF * 3.75), topLy: 40 },
            { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 5.25), topLy: 40 },
            { canWidth: (dF * 1.5), canHeight: (dF * 3), topLx: (dF * 6.75), topLy: 40 }
        ];

        p.image(img, 0, 0);

        // Create instances of clockCanvas
        for (let i = 0; i < locations.length; i++) {
            let clock = new clockCanvas(
                p,
                fonts,
                locations[i].city,
                locations[i].UTCoffMS + utcOffSolar,
                locations[i].IntitIndex,
                wordlist,
                sizePlacement[i].canWidth,
                sizePlacement[i].canHeight
            );
            clockCanvasArray.push({
                clock: clock,
                x: sizePlacement[i].topLx,
                y: sizePlacement[i].topLy
            });
        }
    };

    p.draw = () => {
        p.background(255);
        p.image(img, 0, 0);

        for (let canvas of clockCanvasArray) {
            canvas.clock.draw();
            canvas.clock.display(canvas.x, canvas.y);
        }

        // // Example draw code: Draw a circle that follows the mouse
        // p.fill(100);
        // p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default sketch;