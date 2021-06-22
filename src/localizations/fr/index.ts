import { frMenuTop, frMenuFooter } from 'src/localizations/fr/menus';
import { frPortfolioLocale } from 'src/localizations/fr/portfolio';
import { frNotFoundLocale } from 'src/localizations/fr/notFound';
import { frSitemapLocale } from 'src/localizations/fr/sitemap';
import { frHomeLocale } from 'src/localizations/fr/home';
import { enLocale } from 'src/localizations/en';
import { frSitemap } from 'config/sitemap/fr';

const frLocale: typeof enLocale = {
    global: {
        bookConsultation: 'Prendre un rendez-vous',
        footer: {
            copyright: 'Tous droits réservés. © {0}',
            menu: frMenuFooter,
            quote: 'Nous transformons vos idées en applications web modernes et performantes.'
        },
        goBack: 'Retourner',
        hrefs: {
            email: 'Envoyez-nous un e-mail',
            facebook: 'Aller à Facebook',
            github: 'Aller à Github',
            linkedIn: 'Aller à LinkedIn',
            logo: 'Aller à la page principale',
            options: 'Ouvrir le menu d\'options',
            phone: 'Nous appeler',
            sideMenu: 'Ouvrir le menu'
        },
        options: {
            color: 'Couleurs',
            darkMode: 'Mode Sombre',
            languages: 'Langues',
            title: 'Options'
        },
        tawkTo: 'https://embed.tawk.to/6063ba9c067c2605c0bdd9d5/1f22p1sqj',
        underConstruction: 'Cette page est en cours de construction.'
    },
    menu: frMenuTop,
    pages: {
        home: frHomeLocale,
        notFound: frNotFoundLocale,
        portfolio: frPortfolioLocale,
        sitemap: frSitemapLocale
    },
    sitemap: frSitemap
};

export {
    frLocale
};