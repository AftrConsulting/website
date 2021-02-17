import { locale } from 'src/localizations';

interface IStoreInitialLocaleState {
	language: keyof typeof locale;
}

export type {
    IStoreInitialLocaleState
};