import { enWebApplicationDevelopmentLocale } from 'src/localizations/en/services/webApplicationDevelopment';
import { enWebApplicationConsultingLocale } from 'src/localizations/en/services/webApplicationConsulting';
import { enFrontEndConsultingLocale } from 'src/localizations/en/services/frontEndConsulting';
import { enReactConsultingLocale } from 'src/localizations/en/services/reactConsulting';
import { enPortfolioLocale } from 'src/localizations/en/portfolio';
import { enNotFoundLocale } from 'src/localizations/en/notFound';
import { enSitemapLocale } from 'src/localizations/en/sitemap';
import { enGlobalLocale } from 'src/localizations/en/global';
import { enHomeLocale } from 'src/localizations/en/home';
import { enMenuTop } from 'src/localizations/en/menus';
import { enSitemap } from 'config/sitemap/en';

const enLocale = {
    global: enGlobalLocale,
    menu: enMenuTop,
    pages: {
        home: enHomeLocale,
        notFound: enNotFoundLocale,
        portfolio: enPortfolioLocale,
        services: {
            frontEndConsulting: enFrontEndConsultingLocale,
            reactConsulting: enReactConsultingLocale,
            webApplicationConsulting: enWebApplicationConsultingLocale,
            webApplicationDevelopment: enWebApplicationDevelopmentLocale
        },
        sitemap: enSitemapLocale
    },
    sitemap: enSitemap
};

export {
    enLocale
};