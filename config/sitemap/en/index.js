const enSitemap = {
    home: {
        href: '/',
        title: 'Accueil',
        exclude: true,
        home: true,
        seo: {
            title: 'Web Apps Development And Consultations - {COMPANY}',
            description: `We transform your ideas into high performance modern web apps. 
			              We provide React, TypeScript, PHP, Node.js development and consultations.`
        }
    },
    about: { 
        href: '/about',
        title: 'About'
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
        title: 'Privacy Policy',
        seo: {
            title: 'Privacy Policy - {COMPANY}',
            description: 'Privacy Policy of AftrConsulting.'
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
        exclude: true
    },
    termsOfUse: {
        href: '/terms-of-use',
        title: 'Terms of Use',
        seo: {
            title: 'Terms of Use - {COMPANY}',
            description: 'Terms of Use of AftrConsulting.'
        }
    }
};

module.exports = {
    enSitemap
};