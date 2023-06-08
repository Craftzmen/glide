import React from 'react'
import App from './App';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';

// React DOM Client
import ReactDOM from 'react-dom/client';

// Chakra UI Provider
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
);
