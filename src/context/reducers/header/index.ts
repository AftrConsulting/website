import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { HeaderAction } from 'src/context/enums/header';

const initialState = {
    options: false,
    sideMenu: false
};

/**
 * Returns the theme reducer.
 * @param {IStoreInitialHeaderState} state - The state.
 * @param {IActionResponse} action - The action.
 */
const getHeaderReducer = (state: IStoreInitialHeaderState = initialState, action: IActionResponse): unknown => {
    const newState = { ...state };

    if (action.type === HeaderAction.toggleSideMenu) {
        newState[action.other as string] = action.value as boolean;
    }
	
    return newState;
};

export {
    getHeaderReducer
};