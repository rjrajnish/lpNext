import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { SnackbarProvider } from 'notistack';
import { createRef, useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import FloatingWhatsApp from 'react-floating-whatsapp';



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

 const wrapper = createRef();

  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          <div  ref={wrapper} style={{zIndex:'9999', position: 'absolute' }}>
            {' '}
            <FloatingWhatsApp phoneNumber="98765431 " accountName="Smriti" />
          </div>

          <Component {...pageProps} />
        </PayPalScriptProvider>
      </StoreProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
