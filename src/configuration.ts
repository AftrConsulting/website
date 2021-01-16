import { IConfiguration } from 'src/interfaces/IConfiguration';

/**
 * The configuration file.
 */
const configuration: IConfiguration = {
    cookies: {
        primaryColor: 'primaryColor',
        theme: 'theme'
    },
    defaults: {
        themeName: 'dark'
    },
    env: {
        name: process.env.NODE_ENV
    }
};

export {
    configuration
};