const frSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: 'Développement et Consultations Applications Web - {COMPANY}',
        description: `Nous transformons vos idées en applications Web modernes et performantes.
					  Nous fournissons du développement et des consultations en React, TypeScript, PHP, Node.js.`
    },
    about: { 
        href: '/about',
        title: 'À propos'
    }, 
    blog: { 
        href: '/blog',
        title: 'Blog'
    },
    portfolio: {
        href: '/portfolio',
        title: 'Portfolio' 
    },
    privacyPolicy: {
        href: '/privacy-policy',
        title: 'Politique de confidentialité'
    },
    services: {
        service1: {
            title: 'Service 1'
        },
        service2: {
            title: 'Service 2'
        },
        service3: {
            title: 'Service 3'
        },
        service4: {
            title: 'Service 4'
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