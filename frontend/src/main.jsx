import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import configureStore from './components/redux/configureStore.jsx'
import {Provider as ReduxProvider} from 'react-redux';

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
)
