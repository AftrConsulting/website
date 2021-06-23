const enSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: 'Best Web Development Services - {COMPANY}',
        description: `Very Fast Web Development. React, PHP, Node.js. Consultations. 
					  Affordable Pricing. Top Results. On-Time Delivery.`
    },
    about: { 
        href: '/about',
        title: 'About',
        seoTitle: 'About - {COMPANY}',
        description: `The about page where we share information about our company. 
					  We are AftrConsulting. We provide React, TypeScript, PHP, Node.js development and consultations.`
    }, 
    blog: { 
        href: '/blog',
        title: 'Blog',
        seoTitle: 'Our Blog - {COMPANY}',
        description: `The blog page where we share articles on web development themes.
					  We are AftrConsulting. We provide React, TypeScript, PHP, Node.js development and consultations.`
    },
    portfolio: {
        href: '/portfolio',
        title: 'Portfolio',
        seoTitle: 'Our Portfolio - {COMPANY}',
        description: `The portfolio page where you can see all of our projects.
					  We are AftrConsulting. We provide React, TypeScript, PHP, Node.js development and consultations.`
    },
    privacyPolicy: {
        href: '/privacy-policy',
        title: 'Privacy Policy'
    },
    services: {
        frontEndConsulting: {
            href: '/services/front-end-consulting',
            title: 'Front-End Consulting',
            seoTitle: 'Front-End Consulting - {COMPANY}'
        },
        reactConsulting: {
            href: '/services/react-consulting',
            title: 'React Consulting',
            seoTitle: 'React Consulting - {COMPANY}'
        },
        webApplicationDevelopment: {
            href: '/services/web-application-development',
            title: 'Web Application Development',
            seoTitle: 'Web Application Development - {COMPANY}'
        },
        webApplicationConsulting: {
            href: '/services/web-application-consulting',
            title: 'Web Application Consulting',
            seoTitle: 'Web Application Consulting - {COMPANY}'
        }
    },
    sitemap: {
        href: '/sitemap',
        title: 'Sitemap',
        exclude: true,
        seoTitle: 'Sitemap - {COMPANY}',
        description: 'Sitemap of AftrConsulting.'
    },
    termsOfUse: {
        href: '/terms-of-use',
        title: 'Terms of Use'
    }
};

module.exports = {
    enSitemap
};