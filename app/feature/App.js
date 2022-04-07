import React from 'react';
import AppNavigation from '../navigation/AppNavigation';
import { StripeProvider } from '@stripe/stripe-react-native';

const publishableKey='pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'
//pk_test_51IhpX7L9qOT0hiu3w3AqOK0mXiaDIBfs9x5K0XYicih2wiFeMRxpMnm8JOhhmOUvCpxc0EZ52kCfXFjA3suDxw9Y00ckJ9Hn3U

const App = () => {
  return (
    <StripeProvider
      publishableKey={publishableKey}
    >
      <AppNavigation />
    </StripeProvider>
  );
};

export default App;
