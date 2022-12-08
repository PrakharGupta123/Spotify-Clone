import React from 'react';


function Navbar() {
  return (
    <>
      
     
      <div className='nav'>
      
        <div className='navitems'><a href='https://www.spotify.com/in-en/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade' target="_blank"  rel="noopener noreferrer">Premium</a></div>
        <div className='navitems'><a href='https://support.spotify.com/in-en/' target="_blank" rel="noopener noreferrer">Support</a></div>
        <div className='navitems'><a href='https://www.spotify.com/in-en/download/windows/' target="_blank" rel="noopener noreferrer">Download</a></div>
        <div className='navitems navline'>|</div>
        <div className='navitems'>Sign up</div>
        <button  className='navitems' id='login'>Log in</button>
      </div>
   
    </>
  );
}

export default Navbar;
