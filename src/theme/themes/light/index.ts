import { darken, lighten } from 'polished';
import { ITheme } from 'src/theme/interfaces/ITheme';

const colors = {
    background: '#fafafa',
    color: '#181e1f',
    primary: '#d64541',
    primaryHovered: darken(.1, '#d64541')
};

/**
 * The lightTheme.
 */
const lightTheme: ITheme = { 
    colors,
    global: {
        background: colors.background,
        borderColor: darken(.05, colors.background),
        borderRadius: '7px',
        color: colors.color,
        darkModeSwitch: {
            background: darken(.15, colors.background)
        },
        footer: {
            background: darken(.05, colors.background),
            icon: {
                background: colors.color,
                color: 'white'
            },
            menuColor: darken(.6, colors.background)
        },
        header: {
            iconColor: darken(.5, colors.background),
            logo: {
                background: darken(.1, colors.background),
                language: {
                    background: darken(.05, colors.background),
                    backgroundHover: darken(.08, colors.background),
                    color: lighten(.2, colors.color)
                }
            },
            options: {
                languages: {
                    activeColor: colors.background,
                    background: darken(.15, colors.background)
                }
            },
            sideMenu: {
                background: 'rgba(255,255,255,.4)',
                borderColor: darken(.1, colors.background),
                goBackBackground: darken(.05, colors.background)
            }
        },
        primaryColors: {
            color: '#fafafa'
        }
    },
    pages: {
        home: {
            description: {
                background: darken(.05, colors.background)
            },
            expertises: {
                cardBackground: darken(.05, colors.background)
            },
            quotes: {
                background: lighten(.75, colors.color)
            }
        }
    }
};

export {
    lightTheme
};