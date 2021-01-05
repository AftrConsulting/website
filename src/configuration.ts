import { IConfiguration } from 'src/interfaces/IConfiguration';

/**
 * The configuration file.
 */
const configuration: IConfiguration = {
    cookies: {
        theme: 'theme'
    },
    defaults: {
        theme: 'dark'
    },
    env: {
        name: 'dev'
    }
};

export {
    configuration
};