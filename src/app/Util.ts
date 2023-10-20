export function toUpperCase(s: string): string {
	return s.toUpperCase();
}

export type TStringInfo = {
	loweCase: string;
	upperCase: string;
	length: number;
	character: string[];
	extraInfo?: object;
};

export function getStringInfo(s: string): TStringInfo {
	return {
		loweCase: s.toLowerCase(),
		upperCase: s.toUpperCase(),
		length: s.length,
		character: s.split('')
	};
}
