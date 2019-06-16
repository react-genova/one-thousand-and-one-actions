import { RESET_COUNTER, INCREMENT_COUNTER } from "./actionDefinitions";

const initialState = { value: 0 };

const incrementCounterHandler = (state, action) => ({ ...state, value: state.value + 1 });

const resetCounterHandler = (state, action) => ({ ...state, value: 0 });

const defaultHandler = (state, action) => state;

const handlers = {
    [RESET_COUNTER]: resetCounterHandler,
    [INCREMENT_COUNTER]: incrementCounterHandler,
};

const counter = (state = initialState, action = {}) => (handlers[action.type] || defaultHandler)(state, action);

export default counter;
