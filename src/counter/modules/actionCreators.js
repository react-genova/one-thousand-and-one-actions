import { RESET_COUNTER, INCREMENT_COUNTER } from "./actionDefinitions";

export const resetCounter = () => ({
    type: RESET_COUNTER,
    payload: { },
});

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER,
    payload: { },
});
