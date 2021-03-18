import { IConfiguration } from 'src/interfaces/IConfiguration';
import { primaryColors } from 'src/theme';

/**
 * The configuration file.
 */
const configuration: IConfiguration = {
    defaults: {
        primary: primaryColors[0],
        themeName: 'light'
    },
    env: {
        name: process.env.NODE_ENV
    },
    general: {
        consultation: 'https://calendly.com/t-mouskhelichvili/30min',
        email: 'info@aftrconsulting.com',
        facebook: '',
        github: 'https://github.com/AftrConsulting',
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