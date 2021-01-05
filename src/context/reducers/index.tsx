import { combineReducers } from 'redux';
import { IStoreInitialState } from 'src/context/interfaces/IStoreInitialState';
import { getThemeReducer } from 'src/context/reducers/theme';

/**
 * Returns the store.
 * @param {IStoreInitialState} initialState - The initial state. 
 */
const getRootReducers = (initialState: IStoreInitialState): never => {
    return combineReducers({
        theme: getThemeReducer(initialState)
    }) as never;
};

export {
    getRootReducers
};