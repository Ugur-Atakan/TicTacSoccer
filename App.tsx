import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './utils/redux/stores/store';
import Navigator from './utils/navigation';
import Realm from "realm";
import { RealmProvider } from './www/config';
export default function App() {
  return (
    <RealmProvider>
    <Provider store={store}>
      <Navigator />
    </Provider>
    </RealmProvider>
  );
}
