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
        themeName: 'light'
    },
    env: {
        name: process.env.NODE_ENV
    },
    general: {
        consultation: 'https://calendly.com/t-mouskhelichvili/30min',
        email: 'info@aftrconsulting.com',
        logo: '/static/images/headerLogo.png'
    },
    languages: [ 'en', 'fr' ]
};

export {
    configuration
};