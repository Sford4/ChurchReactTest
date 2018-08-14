import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Title from './components/Title';
import Article from './components/Article';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Title} />
			<Route path="/article" component={Article} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
