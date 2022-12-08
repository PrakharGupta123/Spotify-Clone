import React  from 'react';


function Card(props) {
   
  return (
    <>
   
    <div className='cardmain'  >
      <div className='card'>
          <img className='cardimg' src={props.imgurl} alt=''/>
          <div className='card-heading' >{props.heading}</div>
          <div className='card-text' >{props.text}</div>
      </div>
    </div>
    </>
  );
}

export default Card;
