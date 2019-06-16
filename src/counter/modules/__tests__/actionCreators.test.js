import { resetCounter, incrementCounter } from '../actionCreators';
import { RESET_COUNTER, INCREMENT_COUNTER } from '../actionDefinitions';

describe('Counter module action creators', () => {
    it('should generare a reset counter action', () => {
        expect(resetCounter()).toEqual({
            type: RESET_COUNTER,
            payload: { },
        });
    });

    it('should generare a increment counter action', () => {
        expect(incrementCounter()).toEqual({
            type: INCREMENT_COUNTER,
            payload: { },
        });
    });
});