import React  from 'react';
import playbutton from '../Images/playbutton.png'


function Insidetile(props) {
    return (
      <>
      <div className='insidetile'>
        <div className='tilebanner'>
            <img className='tileimg' src={props.imgurl1} alt=""/>
            <div className='tiledesc'>
                <div className='tilename'>{props.smallheading1}</div>
                <div className='tileheading'>{props.heading1}</div>
                <div className='tiletext'>{props.text1}</div>
                <div className='extra-info'>
                    <div>Spotify</div>
                    <div>. 232482t47 likes</div>
                    <div>. 50 songs,</div>
                    <div>2 hr 37 min</div>
                </div>
            </div>
        </div>
        <div className='song-section-nav'>
            <div><img width="50px" src={playbutton} alt=''/></div>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>   </div> 
            <div><svg xmlns="http://www.w3.org/2000/svg"  height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg> </div>   
        </div>
        <div className='song'>
            
            <div id='title'>
                <div>#</div>
                <div>TITLE</div>
            </div>
            <div>ALBUM</div>
            <div>DATE ADDED</div>
            <i class="bi bi-clock"></i>
        </div>
      </div>  
      </>
    );
  }
  
  export default Insidetile;