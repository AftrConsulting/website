import { ITheme } from 'src/theme/interfaces/ITheme';
import { MyTheme } from 'src/theme/types/MyTheme';

interface IStoreInitialThemeState {
	themeName: MyTheme;
	theme: ITheme;
	primaryColor: string;
}

export type {
    IStoreInitialThemeState
};