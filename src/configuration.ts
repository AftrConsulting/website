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
        company: 'AftrConsulting',
        consultation: 'https://calendly.com/aftrconsulting/30min',
        email: 'info@aftrconsulting.com',
        facebook: 'https://www.facebook.com/aftrconsulting/',
        github: 'https://github.com/AftrConsulting',
        google: {
            universal: 'UA-192636657-1' 
        },		
        imgs: {
            headerLogo: '/static/images/headerLogo.png',
            logo: '/static/images/logo.png',
            openGraphImage: '/static/images/openGraphImage.png'
        },
        linkedIn: 'https://www.linkedin.com/company/aftrconsulting',
        trustpilot: 'https://www.trustpilot.com/review/aftrconsulting.com',
        twitter: {
            account: '@aftrconsulting'
        }
    },
    localStorage: {
        primary: 'primary',
        theme: 'theme'
    }
};

export {
    configuration
};