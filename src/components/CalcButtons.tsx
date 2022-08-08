import { displayButtons } from '../helpers';
import { btnType } from '../helpers/';
import { CalcButton } from './CalcButton';

interface Props {
	handleClick: ({ val, type }: { val: string; type: btnType }) => void;
}

export const CalcButtons = ({ handleClick }: Props) => {
	return (
		<section className='calc-container'>
			{displayButtons.map(({ id, value, type, size, disabled }) => (
				<CalcButton
					key={id}
					value={value}
					type={type}
					className={[`calc-btn__${type}`, size].join(' ')}
					disabled={disabled}
					handleClick={handleClick}
				/>
			))}
		</section>
	);
};
