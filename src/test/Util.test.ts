import { toUpperCase } from '../app/Util';

describe('Utils test suite', () => {
	it('should return upper case string of a valid string', () => {
		// arrange
		const sut = toUpperCase;
		const expected = 'HELLO';
		// act
		const actual = sut('hello');

		// assert
		expect(actual).toBe(expected);
	});
});
