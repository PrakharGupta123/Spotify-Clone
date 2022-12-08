import React from 'react';
import Card from '../components/Card.jsx'
import {
  Link
} from "react-router-dom";
function Newreleases() {
  return (
    <>
    <div className='category'>
    <div className='heading'>
Popular new releases    </div>
    <div className='card-items'>
    <Link to="/r1"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KpbAdCJzabcXxRGt0pFj9joUOUc3nK9ZPQPtLVtGZox4QrbCe-IM575Dh1WiETOoARQ&usqp=CAU' heading="Heroes & Villans" text=''/></Link>
      <Link to="/r2"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3NnADi39gERrIMUgJNSJoCJGDNAO42DO6w&usqp=CAU' heading="Pointless" text=''/></Link>
      <Link to="/r3"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh8kCRYqvc0RQJm1QdmEwTSC4txzVqqR2Kg&usqp=CAU' heading="Shittin' Me" text=''/></Link>
      <Link to="/r4"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfodSkhuYR2o1_4yt5_PbMBx7blXuYfgqIg&usqp=CAU' heading="FTCU(feat.Glorilla&Gansta Boo)" text=''/></Link>
      <Link to="/r5"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObtfeQCTu1qUHcU5a7XPr-SPjzM3NN1y2bQ&usqp=CAU' heading="SR Santos" text=''/></Link>
      <Link to="/r6"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PVgEzp3LuDF1ZH3Cc2dN1vN2I0z1Owjkjw&usqp=CAU' heading="Boy's a Lier" text=''/></Link>


    </div>
    


    </div>
    
    </>
  );
}

export default Newreleases;
