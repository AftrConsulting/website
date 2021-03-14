import { IMenuItem } from 'src/interfaces/IMenuItem';
import { enSitemap } from 'config/sitemap/en';

const enMenuTop: IMenuItem[] = [ 
    { 
        subItems: [
            enSitemap.services.service1,
            enSitemap.services.service2,
            enSitemap.services.service3,
            enSitemap.services.service4
        ],
        title: 'Services'
    },
    enSitemap.portfolio,
    enSitemap.about,
    enSitemap.blog
];

const enMenuFooter = [
    enSitemap.blog,
    enSitemap.about,
    enSitemap.privacyPolicy,
    enSitemap.termsOfUse,
    enSitemap.sitemap
];

export {
    enMenuTop,
    enMenuFooter
};