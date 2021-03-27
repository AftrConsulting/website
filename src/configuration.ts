import { primaryColors } from 'src/theme';

/**
 * The configuration file.
 */
const configuration = {
    defaults: {
        primary: primaryColors[0],
        themeName: 'light'
    },
    env: {
        name: process.env.NODE_ENV
    },
    general: {
        baseUrl: 'https://aftrconsulting.com',
        consultation: 'https://calendly.com/t-mouskhelichvili/30min',
        email: 'info@aftrconsulting.com',
        facebook: '',
        github: 'https://github.com/AftrConsulting',
        google: {
            universal: 'UA-192636657-1' 
        },
        linkedIn: '',
        logo: '/static/images/headerLogo.png'
    },
    localStorage: {
        primary: 'primary',
        theme: 'theme'
    }
};

export {
    configuration
};