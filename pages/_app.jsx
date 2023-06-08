// MUI Components
import Box from '@mui/material/Box';
// Components
import MultipageLayout from '@/components/layouts/MultipageLayout/MultipageLayout';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from '@/styles/theme';
import store from '@/redux/store';
// Hooks
import { useRouter } from 'next/router';
// CSS
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box dir="rtl">
          {
            router.pathname.includes("sign") ?
              <>
                <Component {...pageProps} />
              </> 
            :
              <MultipageLayout>
                <Component {...pageProps} />
              </MultipageLayout>
          }
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default App;