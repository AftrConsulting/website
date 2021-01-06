import NextI18Next from 'next-i18next';
import Path from 'path';

/**
 * The next I18 next.
 */
const { withTranslation, Link, Router, useTranslation, appWithTranslation } = new NextI18Next({
    defaultLanguage: 'en',
    localePath: Path.resolve('./public/static/locales') as string,
    otherLanguages: []
});

export {
    withTranslation, 
    Link, 
    Router, 
    useTranslation,
    appWithTranslation
};