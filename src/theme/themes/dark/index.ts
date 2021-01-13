import { lighten } from 'polished';
import { ITheme } from 'src/theme/interfaces/ITheme';

const colors = {
    background: '#181e1f',
    color: '#f6fbfc'
};

/**
 * The darkTheme.
 */
const darkTheme: ITheme = {
    global: {
        background: colors.background,
        borderColor: lighten(.1, colors.background),
        color: colors.color,
        header: {
            iconColor: lighten(.6, colors.background),
            sideMenu: {
                background: 'rgba(0,0,0,.5)',
                borderColor: lighten(.1, colors.background)
            }
        }
    }
};

export {
    darkTheme
};