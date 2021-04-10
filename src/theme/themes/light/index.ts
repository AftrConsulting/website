import { darken, lighten } from 'polished';
import { lightFirstSectionImages } from 'src/theme/themes/light/images/firstSection';
import { lightColors } from 'src/theme/themes/light/colors';
import { darkTheme } from 'src/theme/themes/dark';


/**
 * The lightTheme.
 */
const lightTheme: typeof darkTheme = { 
    colors: lightColors,
    global: {
        background: lightColors.background,
        borderColor: darken(.05, lightColors.background),
        borderRadius: '7px',
        color: lightColors.color,
        darkModeSwitch: {
            background: darken(.15, lightColors.background)
        },
        footer: {
            background: darken(.05, lightColors.background),
            icon: {
                background: lightColors.color,
                color: 'white'
            },
            menuColor: darken(.6, lightColors.background)
        },
        header: {
            iconColor: darken(.5, lightColors.background),
            logo: {
                background: darken(.1, lightColors.background),
                language: {
                    background: darken(.05, lightColors.background),
                    backgroundHover: darken(.08, lightColors.background),
                    color: lighten(.2, lightColors.color)
                }
            },
            options: {
                languages: {
                    activeColor: lightColors.background,
                    background: darken(.15, lightColors.background)
                }
            },
            sideMenu: {
                background: 'rgba(255,255,255,.4)',
                borderColor: darken(.1, lightColors.background),
                goBackBackground: darken(.05, lightColors.background)
            }
        },
        markdown: {
            metaDataColor: lighten(.5, lightColors.color)
        },
        primaryColors: {
            color: '#fafafa'
        }
    },
    pages: {
        home: {
            description: {
                background: darken(.05, lightColors.background)
            },
            expertises: {
                cardBackground: darken(.05, lightColors.background)
            },
            images: {
                first: lightFirstSectionImages
            },
            quotes: {
                background: lighten(.75, lightColors.color)
            }
        }
    }
};

export {
    lightTheme
};