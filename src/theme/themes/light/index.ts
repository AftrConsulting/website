import { darken } from 'polished';
import { ITheme } from 'src/theme/interfaces/ITheme';

const colors = {
    background: '#fafafa',
    color: '#181e1f',
    primary: '#d64541'
};

/**
 * The lightTheme.
 */
const lightTheme: ITheme = {
    global: {
        background: colors.background,
        borderColor: darken(.05, colors.background),
        color: colors.color,
        darkModeSwitch: {
            background: darken(.1, colors.background),
            onColor: colors.primary
        },
        header: {
            iconColor: darken(.5, colors.background),
            options: {
                languages: {
                    activeBackground: colors.primary,
                    activeColor: colors.background
                }
            },
            sideMenu: {
                background: 'rgba(255,255,255,.4)',
                borderColor: darken(.1, colors.background)
            }
        }
    }
};

export {
    lightTheme
};