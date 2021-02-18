import { frHomeLocale } from 'src/localizations/fr/home';
import { frMenu } from 'src/localizations/fr/menu';
import { enLocale } from 'src/localizations/en';

const frLocale: typeof enLocale = {
    global: {
        bookConsultation: 'Prendre un rendez-vous',
        goBack: 'Retourner',
        options: {
            color: 'Couleurs',
            darkMode: 'Mode Sombre',
            languages: 'Langues',
            title: 'Options'
        },
        seo: {
            description: 'Le Français - A short description goes here.',
            title: 'Le Français - Simple Usage Example'
        }
    },
    menu: frMenu,
    pages: {
        home: frHomeLocale
    }
};

export {
    frLocale
};