// images
import bgImgPath from '../assets/images/pagetexture_cleaned.png';  // Import the image file

// fonts
import caslonSignPath from '../assets/fonts/LibreCaslonDisplay-Regular.ttf'; // Import the Display font file
import caslonBoldPath from '../assets/fonts/LibreCaslonText-Bold.ttf'; // Import the Bold font file
import caslonItalicPath from '../assets/fonts/LibreCaslonText-Italic.ttf'; // Import the Italic font file
import caslonRegularPath from '../assets/fonts/LibreCaslonText-Regular.ttf'; // Import the Regular font file

// modules
// import clockCanvas from '../modulesClasses/clockCanvas.js'; // import clockCanvas class  

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

// //font variables
// let signFont, boldFont, italicFont, regularFont;

// let baseOffset;
// let clockCanvasArray = [];

const sketch = (p) => {
    p.preload = () => {
        img = p.loadImage(bgImgPath);  // Load the image

        p.signFont = p.loadFont(caslonSignPath); // Load the font
        p.boldFont = p.loadFont(caslonBoldPath); // Load the font
        p.italicFont = p.loadFont(caslonItalicPath); // Load the font
        p.regularFont = p.loadFont(caslonRegularPath); // Load the font

        //TODO: load UTC solar offset = baseOffset;
    };

    p.setup = () => {
        const canvas = p.createCanvas(img.width, img.height); // Create a canvas
        canvas.id('MyCanvas'); // Set id of the canvas
        canvas.parent('test'); // Attach canvas to the div with id "test"
        p.background(255);

        dF = p.width / locations.length*2;
        console.log(dF);

        // Display the image
        p.image(img, 0, 0);

        // create array of fonts
        const fonts = {
            signFont: p.signFont,
            boldFont: p.boldFont,
            italicFont: p.italicFont,
            regularFont: p.regularFont
        };

        
    };

    p.draw = () => {
        // p.textFont(p.italicFont);
        // p.textSize(14);
        // p.fill(0);
        // p.textAlign(p.CENTER, p.CENTER);   
        // p.text(locations[3].city, p.width / 2, 30); // Center the text horizontally


        // Example draw code: Draw a circle that follows the mouse
        p.fill(100);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default sketch;