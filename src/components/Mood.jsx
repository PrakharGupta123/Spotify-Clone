import React from 'react';
import Card from '../components/Card.jsx'
import {
  Link
} from "react-router-dom";
function Mood() {
  return (
    <>
    <div className='category'>
    <div className='heading'>
Mood    </div>
    <div className='card-items'>
    <Link to="/m1"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTz39av06yUg8zVhGF7Js6veHUcdLL2E0AEMRXGyV9wHSXIDescyXWWExBxiVcm_OSyIw&usqp=CAU' heading="Mood Booster" text="Get happy with today's dose of feel-good songs!"/></Link>
    <Link to="/m2"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMM5OzCJrTLtaVIxH84ZvzAhFrGZbQ8PTU_w&usqp=CAU' heading="Feelin' Good" text='Feel good with this positively timeless playlist!'/></Link>
    <Link to="/m3"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE71rhwZ1arkXnCBciOeytAjFT_9Hv-tcsA&usqp=CAU' heading="Dark & Stormy" text='Beautifully dark, dramatic tracks.'/></Link>
    <Link to="/m4"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXKv1MRcoVT0A73MSMFP8Q0DKzMTl-x-VXA&usqp=CAU' heading="Feel Good Piano" text='Happy vibes for an upbeat morning.'/></Link>
    <Link to="/m5"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD13MINKjRzJt8mRxlkjYp4uKT0nTTA0n42g&usqp=CAU' heading="Feelin' Myself" text="The hip-hop playlist that's a whole mood. Art By Laci Jordan; Cover: Saweetie"/></Link>
    <Link to="/m6"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbhzAiJbIfEbZeAMr_Lg-vR4CEULhHXit2A&usqp=CAU' heading="Sad Hour" text='Somehow heartbreak feels good in a place like this. Cover: Taylor Swift'/></Link>
    <Link to="/m7"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2ctSRFV05o1mbtnU-C2XHTlgBIQpd30-6A&usqp=CAU' heading="Chill Tracks" text='Softer kinda Dance.'/></Link>
    <Link to="/m8"><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlh8duYCETfEAlaT9JL815JLwX1Uh9uVKtARJdX8xzHCDUq492qitMYigkgQzIRoPSws&usqp=CAU' heading="Feel-Good Indie Rock" text='The best indie rock vibes — classic and current.'/></Link>


    </div>
    


    </div>
    
    </>
  );
}

export default Mood;
