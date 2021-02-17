import { combineReducers } from 'redux';
import { IStoreInitialState } from 'src/context/interfaces/IStoreInitialState';
import { getHeaderReducer } from 'src/context/reducers/header';
import { getLocaleReducer } from 'src/context/reducers/locale';
import { getThemeReducer } from 'src/context/reducers/theme';

/**
 * Returns the store.
 * @param {IStoreInitialState} initialState - The initial state. 
 */
const getRootReducers = (initialState: IStoreInitialState): never => {
    return combineReducers({
        header: getHeaderReducer,
        locale: getLocaleReducer,
        theme: getThemeReducer(initialState.theme)
    }) as never;
};

export {
    getRootReducers
};