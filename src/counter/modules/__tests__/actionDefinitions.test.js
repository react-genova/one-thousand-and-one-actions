import { RESET_COUNTER, INCREMENT_COUNTER } from '../actionDefinitions';

describe('Counter module action definitions', () => {
    it('should have uniques and valid actions type', () => {
        expect(RESET_COUNTER).toBeTruthy();
        expect(INCREMENT_COUNTER).toBeTruthy();
        expect(INCREMENT_COUNTER).not.toBe(RESET_COUNTER);
    });
});