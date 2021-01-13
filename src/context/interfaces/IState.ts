import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';

interface IState {
	theme: IStoreInitialThemeState;
	header: IStoreInitialHeaderState;
}

export type {
    IState
};