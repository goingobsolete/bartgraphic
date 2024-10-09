// export const jsons = {
//     grp1: null,
//     grp2: null,
//     grp3: null,
//     grp4: null,
//     grp5: null,
//     wordArray: null,
// };

export const fonts = {
    textFont: null,
    signFont: null,
};

// export const images = {
//     bgTile: null,
// };

// export const sounds = {
//     exSound: null,
// };

export const preload = (pre) => {
    // jsons.grp1 = pre.json('grp1', 'assets/jsons/group1.json');
    // jsons.grp2 = pre.json('grp2', 'assets/jsons/group2.json');
    // jsons.grp3 = pre.json('grp3', 'assets/jsons/group3.json');
    // jsons.grp4 = pre.json('grp4', 'assets/jsons/group4.json');
    // jsons.grp5 = pre.json('grp5', 'assets/jsons/group5.json');
    // jsons.wordArray = pre.json('wordArray', 'assets/jsons/words_with_line_numbers.json');

    fonts.textFont = pre.loadFont('src/assets/fonts/Libre_Caslon_Text/LibreCaslonText-Regular.ttf');
    fonts.signFont = pre.loadFont('src/assets/fonts/Libre_Caslon_Display/LibreCaslonDisplay-Regular.ttf');
};