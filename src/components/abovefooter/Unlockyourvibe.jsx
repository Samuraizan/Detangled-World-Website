import React, { useEffect } from 'react';
import Aos from "aos"
import './unlock.css'
import Twitter from "../../img/twitter.png"
import TwitterHover from "../../img/twitter(Hoverstage).png"
import Discordbtn from "../../img/discordbtn.png"
import DiscordHover from "../../img/discordbtn(Hover).png"
import Insta from "../../img/insta.png"
import InstaHover from "../../img/Insta(Hover).png"

const Unlockyourvibe = () => {

  useEffect(() => {
    Aos.init({duration:2000});
    },[]);
  

  return (<><> < div data-aos="fade-in" className = 'center' > <div className='desc'>
    Join us on discord to become a core contributor in our community built metaverse.</div>
  <div className='unlock'>#UNLOCKYOURVIBE</div>
</div>
</>
<div data-aos="fade-in"  className='container2'>
<div className="image-wrapper">
  <a href="https://twitter.com/UnlockYourVibe" target="_blank" rel="noreferrer">
  <img src={Twitter} className="image" alt="normal"/>
  <img src={TwitterHover} className="image-hover" alt="hover"/>
  </a>
</div>

<div className="image-wrapper">
<a href="https://instagram.com/unlockyour.vibe" target="_blank" rel="noreferrer">
  <img src={Insta} className="image" alt="normal"/>
  <img src={InstaHover} className="image-hover" alt="hover"/></a>
</div>

<div className="image-wrapper">
  <a href="https://discord.gg/R9fuT7Da95" target="_blank" rel="noreferrer">
  <img src={Discordbtn} className="image" alt="normal"/>
  <img src={DiscordHover} className="image-hover" alt="hover"/></a>
</div>
</div>
</>);
}

export default Unlockyourvibe
