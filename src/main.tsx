import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/index.scss';

import { CalcApp } from './CalcApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CalcApp />
	</React.StrictMode>
);
