import { enLocale } from 'src/localizations/en';
import { locale } from 'src/localizations';

interface IStoreInitialLocaleState {
	language: keyof typeof locale;
	locale: typeof enLocale;
}

export type {
    IStoreInitialLocaleState
};