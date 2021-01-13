import { darken } from 'polished';
import { ITheme } from 'src/theme/interfaces/ITheme';

const colors = {
    background: '#fafafa',
    color: '#181e1f'
};

/**
 * The lightTheme.
 */
const lightTheme: ITheme = {
    global: {
        background: colors.background,
        borderColor: darken(.05, colors.background),
        color: colors.color,
        header: {
            iconColor: darken(.5, colors.background),
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