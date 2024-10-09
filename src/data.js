export const fonts = {
    textFont: null,
    signFont: null,
};

let preloadComplete = false;

export const preload = (p) => {
    if (!preloadComplete) {
        fonts.textFont = p.loadFont('src/assets/fonts/Libre_Caslon_Text/LibreCaslonText-Regular.ttf');
        fonts.signFont = p.loadFont('src/assets/fonts/Libre_Caslon_Display/LibreCaslonDisplay-Regular.ttf');
        preloadComplete = true;
    }
};