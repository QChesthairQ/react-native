import { createStore } from 'redux';
import LibraryReducer from './LibraryReducer';

export default function configureStore() {
  let store = createStore(LibraryReducer);
  return store;
}
