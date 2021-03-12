import { enHomeLocale } from 'src/localizations/en/home';
import { enMenuTop, enMenuFooter } from 'src/localizations/en/menus';

const enLocale = {
    global: {
        bookConsultation: 'Book a Free Call',
        footer: {
            copyright: 'All rights reserved. © {0}',
            menu: enMenuFooter,
            quote: 'We transform your ideas into high performance modern web apps.'
        },
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
    menu: enMenuTop,
    pages: {
        home: enHomeLocale
    }
};

export {
    enLocale
};