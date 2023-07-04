
import React from 'react';
import { Client } from 'appwrite';
import { ClerkProvider } from "@clerk/clerk-react";

// Local Imports
import Home from './home/Home';
import './output.css';

const App = () => {
  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('glide');

  return (
    <div>
      <ClerkProvider publishableKey={"pk_test_Z2FtZS1saWdlci01MS5jbGVyay5hY2NvdW50cy5kZXYk"}>
        <Home />
      </ClerkProvider>
    </div>
  )
}
export default App;

