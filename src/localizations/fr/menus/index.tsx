import { IMenuItem } from 'src/interfaces/IMenuItem';
import { frSitemap } from 'config/sitemap/fr';

const frMenuTop: IMenuItem[] = [ 
    // { 
    //     subItems: [
    //         frSitemap.services.service1,
    //         frSitemap.services.service2,
    //         frSitemap.services.service3,
    //         frSitemap.services.service4
    //     ],
    //     title: 'Services'
    // },
    frSitemap.portfolio,
    frSitemap.about
    // frSitemap.blog
];

const frMenuFooter = [
    // frSitemap.blog,
    frSitemap.about,
    frSitemap.privacyPolicy,
    frSitemap.termsOfUse,
    frSitemap.sitemap
];

export {
    frMenuTop,
    frMenuFooter
};