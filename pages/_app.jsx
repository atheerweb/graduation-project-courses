// MUI Components
import Box from '@mui/material/Box';
// Components
import MultipageLayout from '@/components/layouts/MultipageLayout/MultipageLayout';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from '@/styles/theme';
import store from '@/redux/store';
// CSS
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box dir="rtl">
          <MultipageLayout>
            <Component {...pageProps} />
          </MultipageLayout>
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default App;