import NextI18Next from 'next-i18next';
import Path from 'path';

/**
 * The next I18 next.
 */
const { withTranslation, Link, Router, useTranslation, appWithTranslation, i18n } = new NextI18Next({
    defaultLanguage: 'en',
    localePath: Path.resolve('./public/static/locales') as string,
    localeSubpaths: {
        fr: 'fr'
    },
    otherLanguages: [ 'fr' ]
});

/**
 * All languages.
 */
const allLanguages = [ 'en', 'fr' ];

export {
    withTranslation, 
    Link, 
    Router, 
    useTranslation,
    appWithTranslation,
    i18n,
    allLanguages
};