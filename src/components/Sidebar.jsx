import React from 'react';
import search from '../Images/search.svg';
import createplaylist from '../Images/plus.png';
import yourlibrary from '../Images/library.png';
import {
  Link
} from "react-router-dom";
import home from '../Images/home.svg';
function Sidebar() {
  return (
    <>
  <div className='side'>
    <div class="" tabindex="-1"  >
    <div class="header">
    <Link to="/home"><div className='logo'>
        <div className="bi-spotify "/>
    </div></Link>
    <Link to="/home"><div className='spotify'>Spotify</div></Link>
  </div>
  <div class="offcanvas-body">
 
  <Link to="/home"><div className='item-group'>
            <img src={home} alt='' className='item' ></img>
            <div className='item'>Home</div>
    </div></Link>
    <div className='item-group'>
                <img  src={search} alt='' className='item' ></img>
                <div className='item'>Search</div>
    </div>

    <div className='item-group'>
        
                <img src={yourlibrary} alt='' className='item' ></img>
                <div className='item'>Your Library</div>
    </div>

    <br/>
    <div className='item-group'>
                <img src={createplaylist} alt='' className='item createplaylist'  ></img>
                <div className='item'>Create Playlist</div>
    </div>
    <div className='item-group'>
                <img src='https://misc.scdn.co/liked-songs/liked-songs-300.png' alt='' className='item' ></img>
                <div className='item'>Liked Songs</div>
    </div>     
  </div>
  <div className='footer'>
    <div>Cookies</div>
    <div>Privacy</div>
  </div>
</div>


</div>
    </>
  );
}

export default Sidebar;
