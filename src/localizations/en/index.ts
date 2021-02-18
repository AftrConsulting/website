import { enHomeLocale } from 'src/localizations/en/home';
import { enMenu } from 'src/localizations/en/menu';

const enLocale = {
    global: {
        bookConsultation: 'Book a Free Call',
        goBack: 'Go Back',
        options: {
            color: 'Colors',
            darkMode: 'Dark Mode',
            languages: 'Languages',
            title: 'Options'
        },
        seo: {
            description: 'A short description goes here.',
            title: 'Simple Usage Example'
        }
    },
    menu: enMenu,
    pages: {
        home: enHomeLocale
    }
};

export {
    enLocale
};