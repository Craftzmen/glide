
import React from 'react';
import './output.css';

// Local Imports
import Home from './home/Home';


const App = () => {

  const META_IMG_URL = 'https://res.cloudinary.com/dmygqjomq/image/upload/v1686408430/meta_image_pesx2h.png';
  const META_TITLE = 'Glide by Craftzmen - Github';
  const META_DESCRIPTION = 'Glide is your all-in-one platform for seamless access to a vast array of technologies. With Glide, you can explore and discover comprehensive docs for any tech you are passionate about, currently working on, or eager to learn.';
  const META_CANONICAL_LINK = 'https://craftzmen.vercel.app/';

  return (
    <div>
      <Home/>
    </div>
  )
}
export default App;

