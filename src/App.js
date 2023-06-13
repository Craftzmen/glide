
import React from 'react';
import { Client } from 'appwrite';

import './output.css';

// Local Imports
import Home from './home/Home';


const App = () => {

  const client = new Client();
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('glide'); 

  return (
    <div>
      <Home/>
    </div>
  )
}
export default App;

