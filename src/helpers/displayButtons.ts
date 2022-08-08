export type btnType = 'special' | 'operator' | 'number';

interface DisplayButton {
	id: string;
	value: string;
	type: btnType;
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
}

export const displayButtons: DisplayButton[] = [
	// 1st row
	{ id: 'clear', value: 'AC', type: 'special' },
	{ id: 'delete', value: 'C', type: 'special' },
	{ id: 'percent', value: '%', type: 'special', disabled: true },
	{ id: 'divide', value: '/', type: 'operator' },
	// 2nd row
	{ id: 'seven', value: '7', type: 'number' },
	{ id: 'eight', value: '8', type: 'number' },
	{ id: 'nine', value: '9', type: 'number' },
	{ id: 'multiply', value: '*', type: 'operator' },
	// 3rd row
	{ id: 'four', value: '4', type: 'number' },
	{ id: 'five', value: '5', type: 'number' },
	{ id: 'six', value: '6', type: 'number' },
	{ id: 'substract', value: '-', type: 'operator' },
	// 4th row
	{ id: 'one', value: '1', type: 'number' },
	{ id: 'two', value: '2', type: 'number' },
	{ id: 'three', value: '3', type: 'number' },
	{ id: 'add', value: '+', type: 'operator' },
	// 4th row
	{ id: 'zero', value: '0', type: 'number', size: 'md' },
	{ id: 'dot', value: '.', type: 'number' },
	{ id: 'equals', value: '=', type: 'operator' },
];
