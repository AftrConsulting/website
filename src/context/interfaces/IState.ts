import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { IStoreInitialLocaleState } from 'src/context/interfaces/locale/IStoreInitialLocaleState';

interface IState {
	theme: IStoreInitialThemeState;
	header: IStoreInitialHeaderState;
	locale: IStoreInitialLocaleState;
}

export type {
    IState
};