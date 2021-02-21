import { useSelector } from "react-redux";
import { IState } from "src/context/interfaces/IState";
import { context } from "src/context";

/**
 * Returns the functions for the save state before language change.
 */
const useSaveStateBeforeLanguageChange = (): [() => void, () => void] => {
	const header = useSelector((state: IState) => state.header);
	const theme = useSelector((state: IState) => state.theme);
	
	const save = () => {
		context.header = header;
    	context.theme = theme;
	}

	return [
		save, 
		clearSavedState
	];
}

/**
 * Clears the saved state.
 */
const clearSavedState = () => {
	context.header = null;
	context.theme = null;
}

export {
	useSaveStateBeforeLanguageChange,
	clearSavedState
}