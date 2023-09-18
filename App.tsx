import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './utils/redux/stores/store';
import Navigator from './utils/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
