import { IMenuItem } from 'src/interfaces/IMenuItem';

const frMenu: IMenuItem[] = [ 
    { 
        subItems: [
            {
                title: 'Service 1'
            },
            {
                title: 'Service 2'
            },
            {
                title: 'Service 3'
            },
            {
                title: 'Service 4'
            }
        ],
        title: 'Services'
    },
    {
        href: '/portfolio',
        title: 'Portfolio' 
    },
    { 
        href: '/about',
        title: 'À propos'
    }, 
    { 
        href: '/blog',
        title: 'Blog'
    } 
];

export {
    frMenu
};