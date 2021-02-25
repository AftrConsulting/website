import { lighten, darken } from 'polished';
import { ITheme } from 'src/theme/interfaces/ITheme';

const colors = {
    background: '#181e1f',
    color: '#f6fbfc',
    primary: '' // Set by the store.
};

/**
 * The darkTheme.
 */
const darkTheme: ITheme = {
    colors,
    global: {
        background: colors.background,
        borderColor: lighten(.1, colors.background),
        borderRadius: '7px',
        color: colors.color,
        darkModeSwitch: {
            background: darken(.1, '#fafafa')
        },
        footer: {
            background: darken(.05, colors.background),
            borderColor: darken(.07, colors.background),
            color: 'white'
        },
        header: {
            iconColor: lighten(.6, colors.background),
            logo: {
                background: lighten(.2, colors.background),
                language: {
                    background: lighten(.3, colors.background),
                    backgroundHover: lighten(.4, colors.background),
                    color: colors.color
                }
            },
            options: {
                languages: {
                    activeColor: colors.color,
                    background: lighten(.1, colors.background)
                }
            },
            sideMenu: {
                background: 'rgba(0,0,0,.5)',
                borderColor: lighten(.1, colors.background),
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
                background: lighten(.05, colors.background)
            },
            expertises: {
                cardBackground: lighten(.05, colors.background)
            },
            quotes: {
                background: lighten(.2, colors.background)
            }
        }
    }
};

export {
    darkTheme
};