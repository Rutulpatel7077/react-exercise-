import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/App.css';
import {App} from './App';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = configureStore();

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    )
  })
}
