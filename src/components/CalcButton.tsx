import { btnType } from '../helpers';

interface Props {
	className?: string;
	value: string;
	type: btnType;
	disabled?: boolean;
	handleClick: ({ val, type }: { val: string; type: btnType }) => void;
	[x: string]: any;
}

export const CalcButton = ({ className, value, type, disabled, handleClick, ...props }: Props) => {
	return (
		<button
			className={['calc-btn', className?.trim()].join(' ')}
			onClick={() => handleClick({ val: value, type })}
			disabled={disabled}
			{...props}
		>
			{value}
		</button>
	);
};
