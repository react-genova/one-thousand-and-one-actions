import counter from '../reducer';
import { incrementCounter, resetCounter } from '../actionCreators'

describe('Counter module reducer', () => {
    it('should start with a default value', () => {
        expect(counter()).toEqual({ value: 0 });
    });

    it('should return initial state on unknown action', () => {
        const STATE = { value: 666 };
        expect(counter(STATE, { type: 'UNKNOWN ACTION' })).toBe(STATE);
    });

    it('should increment its value', () => {
        const BEFORE_ZERO = counter();
        expect(counter(BEFORE_ZERO, incrementCounter())).toEqual({ value: 1 });
        const BEFORE_1000 = { value: 1000 };
        expect(counter(BEFORE_1000, incrementCounter())).toEqual({ value: 1001 });
    });

    it('should reset its value', () => {
        const BEFORE_1000 = { value: 1000 };
        expect(counter(BEFORE_1000, resetCounter())).toEqual({ value: 0 });
    });
});