import { lighten, darken } from 'polished';
import { darkFirstSectionImages } from 'src/theme/themes/dark/images/firstSection';
import { darkColors } from 'src/theme/themes/dark/colors';

/**
 * The darkTheme.
 */
const darkTheme = {
    colors: darkColors,
    global: {
        background: darkColors.background,
        borderColor: lighten(.1, darkColors.background),
        borderRadius: '7px',
        color: darkColors.color,
        darkModeSwitch: {
            background: darken(.1, '#fafafa')
        },
        footer: {
            background: lighten(.05, darkColors.background),
            icon: {
                background: darkColors.background,
                color: 'white'
            },
            menuColor: lighten(.8, darkColors.background)
        },
        header: {
            iconColor: lighten(.6, darkColors.background),
            logo: {
                background: lighten(.2, darkColors.background),
                language: {
                    background: lighten(.3, darkColors.background),
                    backgroundHover: lighten(.4, darkColors.background),
                    color: darkColors.color
                }
            },
            options: {
                languages: {
                    activeColor: darkColors.color,
                    background: lighten(.1, darkColors.background)
                }
            },
            sideMenu: {
                background: 'rgba(0,0,0,.5)',
                borderColor: lighten(.1, darkColors.background),
                goBackBackground: darken(.05, darkColors.background)
            }
        },
        markdown: {
            metaDataColor: lighten(.5, darkColors.background)
        },
        primaryColors: {
            color: '#fafafa'
        }
    },
    pages: {
        home: {
            description: {
                background: lighten(.05, darkColors.background)
            },
            expertises: {
                cardBackground: lighten(.05, darkColors.background)
            },
            images: {
                first: darkFirstSectionImages
            },
            quotes: {
                background: lighten(.2, darkColors.background)
            }
        }
    }
};

export {
    darkTheme
};