import { frMenuTop, frMenuFooter } from 'src/localizations/fr/menus';
import { frNotFoundLocale } from 'src/localizations/fr/notFound';
import { frSitemapLocale } from 'src/localizations/fr/sitemap';
import { frHomeLocale } from 'src/localizations/fr/home';
import { enLocale } from 'src/localizations/en';

const frLocale: typeof enLocale = {
    global: {
        bookConsultation: 'Prendre un rendez-vous',
        footer: {
            copyright: 'Tous droits réservés. © {0}',
            menu: frMenuFooter,
            quote: 'Nous transformons vos idées en applications web modernes et performantes.'
        },
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
    menu: frMenuTop,
    pages: {
        home: frHomeLocale,
        notFound: frNotFoundLocale,
        sitemap: frSitemapLocale
    }
};

export {
    frLocale
};