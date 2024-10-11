// import textObject from './textObject.js';
// import clockFrame from './clockFrame.js';

class clockCanvas {
    constructor(p, fonts, city, citySolarOffset, intitIndex, wordlist, canWidth, canHeight) {
        this.p = p;
        this.fonts = fonts;
        this.city = city;
        //FIXME: the offset including the utc offset of the city is hard to differentiate
        this.citySolarOffset = citySolarOffset;
        this.wIndex = intitIndex;
        this.wordlist = wordlist;
        this.width = canWidth;
        this.height = canHeight;

        this.graphics = p.createGraphics(this.width, this.height);

        // this.textObject = new textObject(p, fonts, location, wordlist);
        // this.clockFrame = new clockFrame(p, sizePlacement);
    }

    // update()

    draw() {
        this.graphics.clear(); // Clear grapbics buffer
        this.graphics.stroke(0); // Set stroke color to black

        const randomstroke = this.p.random(2,6);
        this.graphics.strokeWeight(randomstroke); // Set stroke weight to random value between 2 and 6
        this.graphics.noFill(); // Set fill to none

        const rectWidth = this.width*0.95;
        const rectHeight = this.height*0.95;
        const rectX = (this.width - rectWidth) / 2;
        const rectY = (this.height - rectHeight) / 2;

        this.graphics.rect(rectX, rectY, rectWidth, rectHeight); // Draw rectangle
    }

    display(x,y) {
        this.p.image(this.graphics, x, y); // Display graphics buffer
    }

}

export default clockCanvas;
    // printValues() {
    //     console.log(this.city, this.UTCoffMSx, this.wIndex, this.wordlist);
    // }

    

    //TODO: size of text and clock depend on the size of the clockCanvas

    //TODO: check wordlist 







    //TODO update time then word (index) based on time 

    // use the loop you had in initial project to update the time and word index