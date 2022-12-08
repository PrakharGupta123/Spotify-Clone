import React from 'react';
import Card from '../components/Card.jsx'
import {
  Link
} from "react-router-dom";
function Focus() {
  return (
    <>
    <div className='category'>
    
    <div className='heading'>
    Focus
</div>
<div className='card-items'>
  <Link to='/f1'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvCLeNSqT5CYJTI9GM73Zr3g4hREDHlD8qQ&usqp=CAU' heading="Peaceful Piano" text=' Relax and indulge with beautiful piano pieces'/></Link>
  <Link to='/f2'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXcRYQ3OaXym3kdG5yKDW5vCoM4N-Hq_vkQ&usqp=CAU' heading="Deep Focus" text='Keep calm and focus with ambient and post-rock music.'/></Link>
  <Link to='/f3'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_o39Pr0oxosG_bcGgggTohZNCBxWcXDyqIA&usqp=CAU' heading="Instrumental Study" text='Focus with soft study music in the background.'/></Link>
  <Link to='/f4'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2v9aVfkFw0wQUKtKr9_KL7h3V3SX7wXwBEzjrxiOSVc6Vb-tqEoRbUWWphGTalZMgWo&usqp=CAU' heading="Chill Lofi Study Beats" text='The perfect study beats. Find your focus, crush your productivity.'/></Link>
  <Link to='/f5'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yqhlSyDq_S5f5SETHotZyQnlg4nFdWG8qg&usqp=CAU' heading="Coding Mode" text='Dedicated to all the programmers out there.'/></Link>
  <Link to='/f6'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhA9lTfS9NjGSHCcFEzI4R8n-f8ZmnRR0cQ&usqp=CAU' heading="Focus Flow" text='Uptempo instrumental hip hop beats.'/></Link>
  <Link to='/f7'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSv9FfUTsJKEMAb8h_EdhgrUQT_ZMIxI_lJQ&usqp=CAU' heading="Workday Lounge" text='Lounge and chill out music for your workday.'/></Link>
  <Link to='/f8'><Card  imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4HoclfyZVVWNJnIQsQTJ5KcmVum-iSp7vQ&usqp=CAU' heading="Beats to think to" text='Focus with deep techno and tech house.'/></Link>


</div>

    </div>
    
    </>
  );
}

export default Focus;
