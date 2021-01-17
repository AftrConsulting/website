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
    urls: {
        consultation: 'https://calendly.com/t-mouskhelichvili/30min'
    }
};

export {
    configuration
};