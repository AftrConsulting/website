import { IMenuItem } from 'src/interfaces/IMenuItem';

const enMenu: IMenuItem[] = [ 
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
        title: 'About'
    }, 
    { 
        href: '/blog',
        title: 'Blog'
    } 
];

export {
    enMenu
};