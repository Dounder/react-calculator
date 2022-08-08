import { useEffect } from 'react';

interface Props {
	display: string;
	operator: string;
	value: string;
}

export const CalcDisplay = ({ display, operator, value }: Props) => {
	return (
		<div className='calc-display'>
			<div className='calc-overlay'>
				<p className='calc-overlay__container'>
					<span className='calc-overlay__operator'></span>
					<span className='calc-overlay__text'>{value}</span>
				</p>
				<p className='calc-overlay__container'>
					<span className='calc-overlay__operator'>{operator}</span>
					<span className='calc-overlay__text'>{display}</span>
				</p>
			</div>
		</div>
	);
};
