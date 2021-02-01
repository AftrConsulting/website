import NextI18Next from 'next-i18next';
import { applyClientHMR } from 'i18next-hmr';
import Path from 'path';

/**
 * The next I18 next.
 */
const nextI18Next = new NextI18Next({
    defaultLanguage: 'en',
    localePath: Path.resolve('./public/static/locales') as string,
    localeSubpaths: {
        fr: 'fr'
    },
    otherLanguages: [ 'fr' ]
});

if (process.env.NODE_ENV !== 'production') {
    applyClientHMR(nextI18Next.i18n);
}

export const {
    withTranslation, 
    Link, 
    Router, 
    useTranslation,
    appWithTranslation,
    i18n
} = nextI18Next;