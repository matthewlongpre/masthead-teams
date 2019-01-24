import React from 'react';
import ReactDOM from 'react-dom';
import MastheadContainer from './components/masthead-container.component';
import * as serviceWorker from './serviceWorker';
import './microsoft-teams-app.js';

ReactDOM.render(<MastheadContainer />, document.getElementById('root'));

serviceWorker.unregister();
