import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';

interface IContext {
	header?: IStoreInitialHeaderState | null;
	theme?: IStoreInitialThemeState | null;
}

export type {
    IContext
};