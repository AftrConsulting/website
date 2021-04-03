const frSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seo: {
            title: 'Développement et Consultations Applications Web - {COMPANY}',
            description: `Nous transformons vos idées en applications Web modernes et performantes.
			              Nous fournissons du développement et des consultations en React, TypeScript, PHP, Node.js.`
        }
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
        title: 'Politique de confidentialité',
        seo: {
            title: 'Politique de confidentialité - {COMPANY}',
            description: 'La polique de confidentialité de AftrConsulting.'
        }
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
        seo: {
            title: 'Sitemap - {COMPANY}',
            description: 'Sitemap de AftrConsulting.'
        }
    },
    termsOfUse: {
        href: '/conditions-dutilisation',
        title: 'Conditions d’utilisation',
        seo: {
            title: 'Conditions d’utilisation - {COMPANY}',
            description: 'Les Conditions d’utilisation de AftrConsulting.'
        }
    }
};

module.exports = {
    frSitemap
};