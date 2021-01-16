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
        color: colors.color,
        darkModeSwitch: {
            background: darken(.1, '#fafafa')
        },
        header: {
            iconColor: lighten(.6, colors.background),
            options: {
                languages: {
                    activeColor: colors.color,
                    background: lighten(.1, colors.background)
                }
            },
            sideMenu: {
                background: 'rgba(0,0,0,.5)',
                borderColor: lighten(.1, colors.background)
            }
        },
        primaryColors: {
            color: '#fafafa'
        }
    }
};

export {
    darkTheme
};