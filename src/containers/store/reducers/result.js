import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";
const initialState = {
	results: [],
};

const deleteResult = (state, action) => {
	const updatedArray = state.results.filter(
		(result) => result.id !== action.resultElID
	);
	return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			// using function utility
			return updateObject(state, {
				results: state.results.concat({
					id: new Date(),
					value: action.result * 2,
				}),
			});

		// change data
		// return {
		// 	...state,
		// 	results: state.results.concat({
		// 		id: new Date(),
		// 		value: action.result * 2,
		// 	}),
		// };
		case actionTypes.DELETE_RESULT:
			// using fuction utility

			return deleteResult(state, action); // call argument deleteResult
		// cara delete pertama
		// const id = 2;
		// const newArray = [...state.results];
		// newArray.splice(id, 1);
		
		// return {
		// 	...state,
		// 	results: updatedArray,
		// };
		default:
			return state;
	}
};

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

export default reducer;
