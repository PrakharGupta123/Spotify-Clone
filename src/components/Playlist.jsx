import React  from 'react';
import {
  Link
} from "react-router-dom";
import Card from '../components/Card.jsx'

function Playlist() {
 
return(
    <>
   
    <div className='category'>
    <div className='heading'>
        Spotify Playlists
    </div>
    <div className='card-items'>
      <Link to="/p1"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNA-eKwldQ6ykM_aP_4jXDbX1H01i4tHt_mQ&usqp=CAU' heading="Today's Top Hits" text='Meghan Trainor is on top of the Hottest 50!'/></Link>
      <Link to='/p2'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8OQ5DS05qZ0bDgIbjBN4vT9KWbPBqn7r7w&usqp=CAU' heading="RapCaviar" text='New music from Metro Boomin, Latto and Nas & 21 Savage.'/></Link>
      <Link to='/p3'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDT0Ewj87viEhF9Xncwp9WUOMzTXLHB2l1w&usqp=CAU' heading="The biggest songs of the 2010s." text='Sam Smith & Kim Petras are on top of the Hottest 50!'/></Link>
      <Link to='/p4'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WPA89Dzr5ki1r7F4NI3vSjxEdEuiFTNV4A&usqp=CAU' heading="Rock Classics" text='Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses/></Link>
      <Link to='/p5'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIhVzck_Fs4o8vfcTmtIQul64sHfSi7jb_Q&usqp=CAU' heading="Chill Hits" text='Kick back to the best new and recent chill hits.'/></Link>
      <Link to='/p6'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy36Ys3Kkidzg9-ZTv11VztT4P1E3ifcEaQ&usqp=CAU' heading="Viva Latino" text="Today's top Latin hits, elevando nuestra música. Cover: Arcangel & Bad Bunny"/></Link>
      <Link to='/p7'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF1HPSolh8E4s2i2e-BQMbDlWhTVoMupoGA&usqp=CAU' heading="Mega Hit Mix" text='A mega mix of 75 favorites from the last few years!'/></Link>
      <Link to='/p8'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz00xh1qhKwHInSGOFknhcSN5d_eYAvhEmA&usqp=CAU' heading="All Out 80s" text='The biggest songs of the 1980s.'/></Link>


    </div>
    


    </div>
    
    </>
  );
}

export default Playlist;
