import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';

interface IStoreInitialState {
	theme: IStoreInitialThemeState;
	language?: string;
}

export type {
    IStoreInitialState
};