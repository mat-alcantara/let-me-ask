import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ContextsProvider from './hooks';

ReactDOM.render(
  <React.StrictMode>
    <ContextsProvider>
      <App />
    </ContextsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
