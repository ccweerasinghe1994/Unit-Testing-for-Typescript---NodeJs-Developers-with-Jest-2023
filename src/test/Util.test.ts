import {toUpperCase, getStringInfo, StringUtil} from '../app/Util';

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

	describe('should return string info of a valid string', () => {
		const sut = getStringInfo;

		// arrange
		const expected = {
			loweCase: 'hello',
			upperCase: 'HELLO',
			length: 5,
			character: ['h', 'e', 'l', 'l', 'o']
		};
		const actual = sut('hello');

		describe('toUpperCase examples', () => {
			it.each([
				{
					input: 'hello',
					expected: 'HELLO'
				},
				{
					input: 'hElLo',
					expected: 'HELLO'
				},
				{
					input: 'HELLO',
					expected: 'HELLO'
				}
			])('$input should return $expected', ({ input, expected }) => {
				expect(toUpperCase(input)).toBe(expected);
			});
		});

		describe('getStringInfo() for argument "hello"', () => {
			it('should return the right lowercase string', () => {
				expect(actual.loweCase).toBe(expected.loweCase);
				expect(actual.loweCase).toHaveLength(expected.length);
				expect(actual.loweCase).toContain<string>('h');
			});

			it('should return the right uppercase string', () => {
				expect(actual.upperCase).toBe(expected.upperCase);
				expect(actual.upperCase).toHaveLength(expected.length);
				expect(actual.upperCase).toContain<string>('H');
			});

			it('should return the right length', () => {
				expect(actual.length).toBe(expected.length);
			});

			it('should return the right character array', () => {
				expect(actual.character).toEqual(expected.character);
				expect(actual.character).toHaveLength(expected.length);
				expect(actual.character).toContain<string>('h');
				// when u don't know the order
				expect(actual.character).toEqual(
					expect.arrayContaining(['h', 'e', 'l', 'l', 'o'])
				);
			});

			it('should return the right info', () => {
				expect(actual.extraInfo).toBeUndefined();
				expect(actual).not.toHaveProperty('extraInfo');
				expect(actual.extraInfo).not.toBeTruthy();
			});
		});
	});

	describe.only("StringUtil test suite", () => {
		let sut: StringUtil|null;
		beforeEach(()=>{
			console.log("beforeEach");
			sut = new StringUtil();
		});
		afterEach(()=>{
			console.log("afterEach");
			sut = null;
		});

		it("Should return correct uppercase",()=>{

			const expected = "HELLO";
			// act
			const actual = sut && sut.toUpperCase("hello");
			// assert
			expect(actual).toBe(expected);
		})
	});
});
