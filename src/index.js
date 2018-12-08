import React from 'react';
import ReactDOM from 'react-dom';
import MastheadContainer from './components/masthead-container.component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MastheadContainer />, document.getElementById('root'));

serviceWorker.unregister();
