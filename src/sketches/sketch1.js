// images
import bgImgPath from '../assets/images/pagetexture_cleaned.png';  // Import the image file

// fonts
import caslonSignPath from '../assets/fonts/Libre_Caslon_Display/LibreCaslonDisplay-Regular.ttf'; // Import the Display font file
import caslonBoldPath from '../assets/fonts/Libre_Caslon_Text/Libre_Caslon_Text-Bold.ttf'; // Import the Bold font file
import caslonItalicPath from '../assets/fonts/Libre_Caslon_Text/Libre_Caslon_Text-Italic.ttf'; // Import the Italic font file
import caslonRegularPath from '../assets/fonts/Libre_Caslon_Text/Libre_Caslon_Text-Regular.ttf'; // Import the Regular font file

// modules
import clockCanvas from 'webpackp5Template/src/modulesClasses/clockCanvas.js' // import clockCanvas class  


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

//font variables
let signTextFont, boldTextFont, italicTextFont, regularTextFont;



let baseOffset;
let clockCanvasArray = [];

const sketch = (p) => {
    p.preload = () => {
        img = p.loadImage(bgImgPath);  // Load the image
        signTextFont = p.loadFont(caslonSignPath); // Load the font
        boldTextFont = p.loadFont(caslonBoldPath); // Load the font
        italicTextFont = p.loadFont(caslonItalicPath); // Load the font
        regularTextFont = p.loadFont(caslonRegularPath); // Load the font

        //TODO: load UTC solar offset = baseOffset;

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
        // // Example draw code: Draw a circle that follows the mouse
        // p.fill(100);
        // p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default sketch;