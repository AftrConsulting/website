import { enMenuTop, enMenuFooter } from 'src/localizations/en/menus';
import { enNotFoundLocale } from 'src/localizations/en/notFound';
import { enSitemapLocale } from 'src/localizations/en/sitemap';
import { enHomeLocale } from 'src/localizations/en/home';
import { enSitemap } from 'config/sitemap/en';

const enLocale = {
    global: {
        bookConsultation: 'Book a Free Call',
        footer: {
            copyright: 'All rights reserved. © {0}',
            menu: enMenuFooter,
            quote: 'We transform your ideas into high-performance modern web apps.'
        },
        goBack: 'Go Back',
        hrefs: {
            email: 'Send us an email',
            facebook: 'Go to Facebook',
            github: 'Go to Github',
            linkedIn: 'Go to LinkedIn',
            logo: 'Go to main page'
        },
        options: {
            color: 'Colors',
            darkMode: 'Dark Mode',
            languages: 'Languages',
            title: 'Options'
        },
        seo: {
            description: 'A short description goes here.',
            title: 'Simple Usage Example'
        },
        tawkTo: 'https://embed.tawk.to/601b625fa9a34e36b973a092/1etlfghc8'
    },
    menu: enMenuTop,
    pages: {
        home: enHomeLocale,
        notFound: enNotFoundLocale,
        sitemap: enSitemapLocale
    },
    sitemap: enSitemap
};

export {
    enLocale
};