import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './utils/redux/stores/store';
import Navigator from './utils/navigation';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    secondary: 'lightblue',
  },
};
export default function App() {

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
}
