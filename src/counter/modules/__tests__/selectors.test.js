import { getCounter } from '../selectors';

describe('Counter module selectors', () => {
    it('should retrieve current counter value', () => {
        expect(getCounter({ counter: { value: 0 } })).toBe(0);
        expect(getCounter({ counter: { value: 123 } })).toBe(123);
        expect(getCounter({ counter: { value: 999999999 } })).toBe(999999999);
    });
});