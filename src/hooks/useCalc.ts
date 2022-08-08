import { useState } from 'react';

import { btnType } from '../helpers';

const initialState = { display: '', operator: '', value: '' };

export const useCalc = () => {
	const [data, setData] = useState(initialState);
	const { display, operator, value } = data;

	const handleClick = ({ val, type }: { val: string; type: btnType }) => {
		if (type === 'special' && val === 'C' && operator === '=') return setData(initialState);
		if (type === 'special' && val === 'AC') return setData(initialState);
		if (type === 'special' && val === 'C')
			return setData((prev) => ({ ...prev, display: prev.display.slice(0, -1) }));

		if (type === 'number') {
			if (operator === '=') return setData((prev) => ({ ...prev, display: val, operator: '' }));
			if (display === '0') return setData((prev) => ({ ...prev, display: prev.display + val }));
			if (display.includes('.') && val === '.') return;
			return setData((prev) => ({ ...prev, display: prev.display + val }));
		}

		if (type === 'operator') {
			if (display === '' || display === '0') return;
			if (display !== '' && val === '=' && value === '') return;
			if (value !== '' && display === '') return;
			if (display !== '' && value !== '' && val !== '=') return;
			if (display !== '' && value !== '' && val === '=')
				return setData(() => ({
					display: eval(`${value}${operator}${display}`),
					operator: '=',
					value: '',
				}));

			setData((prev) => ({ display: '', operator: val, value: prev.display }));
		}
	};

	return {
		//? Properties
		...data,

		//* Methods
		handleClick,
	};
};
