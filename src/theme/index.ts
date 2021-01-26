import { lightTheme } from 'src/theme/themes/light';
import { darkTheme } from 'src/theme/themes/dark';

/**
 * The themes.
 */
const themes = {
    dark: darkTheme,
    light: lightTheme
};

/**
 * The devices.
 */
const devices = {
    mobile: '700px',
    smallMobile: '500px',
    smallTablet: '1000px',
    tablet: '1200px'
};

/**
 * All colors.
 */
const allColors = [ 
    '#d64541',
    '#794bc4',
    '#f45d22',
    '#17bf63'
];


export {
    themes,
    devices,
    allColors
};