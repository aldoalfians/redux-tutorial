import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";
const initialState = {
	counter: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			// using function utility
			return updateObject(state, { counter: state.counter + 1 });
		// ini pendekatan lama
		// const newState = Object.assign({}, state);
		// newState.counter = state.counter + 1;
		// return newState;
		case actionTypes.DECREMENT:
			// using function utility
			return updateObject(state, { counter: state.counter - 1 });
		// return {
		// 	...state,
		// 	counter: state.counter - 1,
		// };
		case actionTypes.ADD:
			// using functon utility
			return updateObject(state, {
				counter: state.counter + action.value,
			});
		// return {
		// 	...state,
		// 	counter: state.counter + action.value,
		// };
		case actionTypes.SUBTRACT:
			//using function utility
			return updateObject(state, {
				counter: state.counter - action.value,
			});
		/*return {
				...state,
				counter: state.counter - action.value,
			};*/
		default:
			return state;
	}

	// if (action.type === "INCREMENT") {
	// 	return {
	// 		counter: state.counter + 1,
	// 	};
	// }
	// if (action.type === "DECREMENT") {
	// 	return {
	// 		counter: state.counter - 1,
	// 	};
	// }
	// if (action.type === "ADD") {
	// 	return {
	// 		counter: state.counter + action.value,
	// 	};
	// }
	// if (action.type === "SUBTRACT") {
	// 	return {
	// 		counter: state.counter - action.value,
	// 	};
	// }
	// return state;
};

export default reducer;
