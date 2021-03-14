const frSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true
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
        href: '/politique-de-confidentialite',
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
        exclude: true
    },
    termsOfUse: {
        href: '/conditions-dutilisation',
        title: 'Conditions d’utilisation'
    }
};

module.exports = {
    frSitemap
};