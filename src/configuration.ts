import { IConfiguration } from 'src/interfaces/IConfiguration';
import { allColors } from 'src/theme';

/**
 * The configuration file.
 */
const configuration: IConfiguration = {
    cookies: {
        primaryColor: 'primaryColor',
        theme: 'theme'
    },
    defaults: {
        primaryColor: allColors[0],
        themeName: 'dark'
    },
    env: {
        name: process.env.NODE_ENV
    },
    google: {
        trackingID: 'G-8YV0T0KY6S'
    },
    languages: [ 'en', 'fr' ],
    urls: {
        consultation: 'https://calendly.com/t-mouskhelichvili/30min'
    }
};

export {
    configuration
};