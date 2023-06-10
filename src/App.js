
import React from 'react';
import './output.css';

// Local Imports
import Home from './home/Home';


const App = () => {

  const META_IMG_URL = 'https://res.cloudinary.com/dmygqjomq/image/upload/v1686408430/meta_image_pesx2h.png';
  const META_TITLE = 'Glide - Documentation';
  const META_DESCRIPTION = 'Glide is your all-in-one platform for seamless access to a vast array of technologies. With Glide, you can explore and discover comprehensive docs for any tech you are passionate about, currently working on, or eager to learn.';
  const META_CANONICAL_LINK = 'https://craftzmen.vercel.app/';

  return (
    <html>
      <head>

        { /* Social Meta Tags - Twitter */ }
        <meta property="twitter:card" content="summary"></meta>
        <meta property="twitter:title" content={META_TITLE} />
        <meta property="twitter:image" content={META_IMG_URL} />
        <meta name="twitter:description" content={META_DESCRIPTION} />

        {/* Socail Meta Tags - OG */}
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:url" content={META_CANONICAL_LINK} />
        <meta property="og:image" content={META_IMG_URL} />
        <meta name="og:description" content={META_DESCRIPTION} />

      </head>
      <body>
        <div>
          <Home/>
        </div>
    </body>
  </html>
  )
}
export default App;

