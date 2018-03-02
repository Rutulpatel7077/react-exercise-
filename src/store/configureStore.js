import allReducers from '../reducers/index';
import {createStore} from 'redux';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();
const configureStore = () => {
  const store = createStore(allReducers, persistedState)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers/index', () => {
        store.replaceReducer(allReducers)
      })
    }
  }

  return store
}

export default configureStore
