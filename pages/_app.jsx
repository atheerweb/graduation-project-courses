import '@/styles/globals.css';
import MultipageLayout from '@/components/layouts/MultipageLayout/MultipageLayout';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from '@/styles/theme';
import store from '@/redux/store';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MultipageLayout>
          <Component {...pageProps} />
        </MultipageLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default App;