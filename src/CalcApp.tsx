import { CalcButtons, CalcDisplay } from './components';
import { useCalc } from './hooks/useCalc';

export const CalcApp = () => {
	const { display, operator, value, handleClick } = useCalc();

	return (
		<article className='calc'>
			<CalcDisplay display={display} operator={operator} value={value} />
			<CalcButtons handleClick={handleClick} />
		</article>
	);
};
