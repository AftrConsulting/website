import { frWebApplicationDevelopmentLocale } from 'src/localizations/fr/services/webApplicationDevelopment';
import { frWebApplicationConsultingLocale } from 'src/localizations/fr/services/webApplicationConsulting';
import { frFrontEndConsultingLocale } from 'src/localizations/fr/services/frontEndConsulting';
import { frReactConsultingLocale } from 'src/localizations/fr/services/reactConsulting';
import { frPortfolioLocale } from 'src/localizations/fr/portfolio';
import { frNotFoundLocale } from 'src/localizations/fr/notFound';
import { frSitemapLocale } from 'src/localizations/fr/sitemap';
import { frGlobalLocale } from 'src/localizations/fr/global';
import { frHomeLocale } from 'src/localizations/fr/home';
import { frMenuTop } from 'src/localizations/fr/menus';
import { enLocale } from 'src/localizations/en';
import { frSitemap } from 'config/sitemap/fr';

const frLocale: typeof enLocale = {
    global: frGlobalLocale,
    menu: frMenuTop,
    pages: {
        home: frHomeLocale,
        notFound: frNotFoundLocale,
        portfolio: frPortfolioLocale,
        services: {
            frontEndConsulting: frFrontEndConsultingLocale,
            reactConsulting: frReactConsultingLocale,
            webApplicationConsulting: frWebApplicationConsultingLocale,
            webApplicationDevelopment: frWebApplicationDevelopmentLocale
        },
        sitemap: frSitemapLocale
    },
    sitemap: frSitemap
};

export {
    frLocale
};