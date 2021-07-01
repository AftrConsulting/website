const frSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: 'Les Meilleurs Services de Développement Web - {COMPANY}',
        description: `Développement Web Très Rapide. React, PHP, Node.js. Consultations. 
		              Prix Compétitifs. Meilleurs Résultats. Délais Respectés.`
    },
    about: { 
        href: '/about',
        title: 'À propos',
        seoTitle: 'À Propos - {COMPANY}',
        description: `La page à propos sur laquelle nous partageons des informations sur notre entreprise. Nous sommes AftrConsulting.
		              Nous fournissons du développement et des consultations en React, TypeScript, PHP, Node.js.`
    }, 
    blog: { 
        href: '/blog',
        title: 'Blog',
        seoTitle: 'Notre Blog - {COMPANY}',
        description: `La page blog où nous partageons des articles sur le développement web. Nous sommes AftrConsulting.
		              Nous fournissons du développement et des consultations en React, TypeScript, PHP, Node.js.`
    },
    portfolio: {
        href: '/portfolio',
        title: 'Portfolio',
        seoTitle: 'Notre Portfolio - {COMPANY}',
        description: `La page portfolio où vous pouvez voir tous nos projets. Nous sommes AftrConsulting. 
		              Nous fournissons du développement et des consultations en React, TypeScript, PHP, Node.js.`
    },
    privacyPolicy: {
        href: '/privacy-policy',
        title: 'Politique de confidentialité'
    },
    services: {
        frontEndConsulting: {
            href: '/services/front-end-consulting',
            title: 'Consultation Front-End',
            seoTitle: 'Consultation Front-End - {COMPANY}'
        },
        reactConsulting: {
            href: '/services/react-consulting',
            title: 'Consultation React.js',
            seoTitle: 'Consultation React.js - {COMPANY}'
        },
        webApplicationDevelopment: {
            href: '/services/web-application-development',
            title: 'Développement Applications Web',
            seoTitle: 'Développement Applications Web - {COMPANY}'
        },
        webApplicationConsulting: {
            href: '/services/web-application-consulting',
            title: 'Consultation Application Web',
            seoTitle: 'Consultation Application Web - {COMPANY}'
        }
    },
    sitemap: {
        href: '/sitemap',
        title: 'Sitemap',
        exclude: true,
        seoTitle: 'Sitemap - {COMPANY}',
        description: 'Sitemap de AftrConsulting.'
    },
    termsOfUse: {
        href: '/terms-of-use',
        title: 'Conditions d’utilisation'
    }
};

module.exports = {
    frSitemap
};