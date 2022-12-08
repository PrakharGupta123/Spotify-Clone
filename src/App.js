import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Playlist from './components/Playlist.jsx';
import Focus from './components/Focus.jsx';
import Mood from './components/Mood.jsx';
import Newreleases from './components/Newreleases.jsx';
import Insidetile from './components/Insidetile.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

function App() {
  return (
    <>

    
    <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>

        <Route path='/home'>
        <div className='sections'>
            <Playlist/>
            <Focus/>
            <Mood/>
            <Newreleases/>
          </div>
          </Route>

          <Route path='/p1'>
            <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNA-eKwldQ6ykM_aP_4jXDbX1H01i4tHt_mQ&usqp=CAU' heading1="Today's Top Hits" text1='Meghan Trainor is on top of the Hottest 50!' smallheading1='PLAYLIST'/>
          </Route> 
          <Route path='/p2'>
            <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8OQ5DS05qZ0bDgIbjBN4vT9KWbPBqn7r7w&usqp=CAU' heading1="RapCaviar" text1='New music from Metro Boomin, Latto and Nas & 21 Savage.' smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/p3'>
            <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDT0Ewj87viEhF9Xncwp9WUOMzTXLHB2l1w&usqp=CAU' heading1="All Out 2010s" text1='The biggest songs of the 2010s.' smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/p4'>
            <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WPA89Dzr5ki1r7F4NI3vSjxEdEuiFTNV4A&usqp=CAU' heading1="Rock Classics" text1="Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses" smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/p5'>
            <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIhVzck_Fs4o8vfcTmtIQul64sHfSi7jb_Q&usqp=CAU' heading1="Chill Hits" text1="Kick back to the best new and recent chill hits." smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/p6'>
            <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy36Ys3Kkidzg9-ZTv11VztT4P1E3ifcEaQ&usqp=CAU' heading1="Viva Latino" text1="Today's top Latin hits, elevando nuestra música. Cover: Arcangel & Bad Bunny" smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/p7'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF1HPSolh8E4s2i2e-BQMbDlWhTVoMupoGA&usqp=CAU' heading1="Mega Hit Mix" text1='A mega mix of 75 favorites from the last few years!' smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/p8'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz00xh1qhKwHInSGOFknhcSN5d_eYAvhEmA&usqp=CAU' heading1="All Out 80s" text1='The biggest songs of the 1980s.' smallheading1='PLAYLIST'/>
          </Route>
          <Route path='/f1'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvCLeNSqT5CYJTI9GM73Zr3g4hREDHlD8qQ&usqp=CAU' heading1="Peaceful Piano" text1='Relax and indulge with beautiful piano pieces' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f2'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXcRYQ3OaXym3kdG5yKDW5vCoM4N-Hq_vkQ&usqp=CAU' heading1="Deep Focus" text1='Keep calm and focus with ambient and post-rock music.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f3'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_o39Pr0oxosG_bcGgggTohZNCBxWcXDyqIA&usqp=CAU' heading1="Instrumental Study" text1='Focus with soft study music in the background.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f4'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2v9aVfkFw0wQUKtKr9_KL7h3V3SX7wXwBEzjrxiOSVc6Vb-tqEoRbUWWphGTalZMgWo&usqp=CAU' heading1="Chill Lofi Study Beats" text1='The perfect study beats. Find your focus, crush your productivity.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f5'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yqhlSyDq_S5f5SETHotZyQnlg4nFdWG8qg&usqp=CAU' heading1="Coding Mode" text1='Dedicated to all the programmers out there.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f6'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhA9lTfS9NjGSHCcFEzI4R8n-f8ZmnRR0cQ&usqp=CAU' heading1="Focus Flow" text1='Uptempo instrumental hip hop beats.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f7'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSv9FfUTsJKEMAb8h_EdhgrUQT_ZMIxI_lJQ&usqp=CAU' heading1="Workday Lounge" text1='Lounge and chill out music for your workday.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/f8'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4HoclfyZVVWNJnIQsQTJ5KcmVum-iSp7vQ&usqp=CAU' heading1="Beats to think to" text1='Focus with deep techno and tech house.' smallheading1='FOCUS'/>
          </Route>
          <Route path='/m1'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTz39av06yUg8zVhGF7Js6veHUcdLL2E0AEMRXGyV9wHSXIDescyXWWExBxiVcm_OSyIw&usqp=CAU' heading1="Mood Booster" text1="Get happy with today's dose of feel-good songs!" smallheading1='Mood'/>
          </Route>
          <Route path='/m2'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMM5OzCJrTLtaVIxH84ZvzAhFrGZbQ8PTU_w&usqp=CAU' heading1="Feelin' Good" text1='Feel good with this positively timeless playlist!'smallheading1='Mood'/>
          </Route>
          <Route path='/m3'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE71rhwZ1arkXnCBciOeytAjFT_9Hv-tcsA&usqp=CAU' heading1="Dark & Stormy" text1='Beautifully dark, dramatic tracks.'smallheading1='Mood'/>
          </Route>
          <Route path='/m4'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXKv1MRcoVT0A73MSMFP8Q0DKzMTl-x-VXA&usqp=CAU' heading1="Feel Good Piano" text1='Happy vibes for an upbeat morning.'smallheading1='Mood'/>
          </Route>
          <Route path='/m5'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD13MINKjRzJt8mRxlkjYp4uKT0nTTA0n42g&usqp=CAU' heading1="Feelin' Myself" text1="The hip-hop playlist that's a whole mood. Art By Laci Jordan; Cover: Saweetie"smallheading1='Mood'/>
          </Route>
          <Route path='/m6'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=1tbn:ANd9GcRYbhzAiJbIfEbZeAMr_Lg-vR4CEULhHXit2A&usqp=CAU' heading1="Sad Hour" text1='Somehow heartbreak feels good in a place like this. Cover: Taylor Swift'smallheading1='Mood'/>
          </Route>
          <Route path='/m7'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2ctSRFV05o1mbtnU-C2XHTlgBIQpd30-6A&usqp=CAU' heading1="Chill Tracks" text1='Softer kinda Dance.'smallheading1='Mood'/>
          </Route>
          <Route path='/m8'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlh8duYCETfEAlaT9JL815JLwX1Uh9uVKtARJdX8xzHCDUq492qitMYigkgQzIRoPSws&usqp=CAU' heading1="Feel-Good Indie Rock" text1='The best indie rock vibes — classic and current.'smallheading1='Mood'/>
          </Route>
          <Route path='/r1'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KpbAdCJzabcXxRGt0pFj9joUOUc3nK9ZPQPtLVtGZox4QrbCe-IM575Dh1WiETOoARQ&usqp=CAU' heading1="Heroes & Villans" text1=''smallheading1='New Releases'/>
          </Route>
          <Route path='/r2'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3NnADi39gERrIMUgJNSJoCJGDNAO42DO6w&usqp=CAU' heading1="Pointless" text1=''smallheading1='New Releases'/>
          </Route>
          <Route path='/r3'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh8kCRYqvc0RQJm1QdmEwTSC4txzVqqR2Kg&usqp=CAU' heading1="Shittin' Me" text1=''smallheading1='New Releases'/>
          </Route>
          <Route path='/r4'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfodSkhuYR2o1_4yt5_PbMBx7blXuYfgqIg&usqp=CAU' heading1="FTCU(feat.Glorilla&Gansta Boo)" text1=''smallheading1='New Releases'/>
          </Route>
          <Route path='/r5'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObtfeQCTu1qUHcU5a7XPr-SPjzM3NN1y2bQ&usqp=CAU' heading1="SR Santos" text1=''smallheading1='New Releases'/>
          </Route>
          <Route path='/r6'>
          <Insidetile  imgurl1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PVgEzp3LuDF1ZH3Cc2dN1vN2I0z1Owjkjw&usqp=CAU' heading1="Boy's a Lier" text1=''smallheading1='New Releases'/>
          </Route>
          
      </Switch>    
     </Router>    
            
    </>
  );
}

export default App;
