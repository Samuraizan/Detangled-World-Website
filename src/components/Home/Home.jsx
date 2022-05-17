import React, { useEffect } from "react";
import Aos from "aos";
import "./home.css";
// import Logo from "../../img/DWlogo.png"
//import firstImg from "../../img/Website_1.jpg"
import firstImg from "../../img/ConnectWallet.jpg";
// import Unlock from "../../img/unlock.png"
import UnlockH from "../../img/unlockh.png"


const Home =() => {
useEffect(() => {
    Aos.init({duration:2000});

  },[]);

  return (

    <div className="mint">
      {/* <img src={Logo} alt="Logo" className="svgLogo"/>  */}
      {/* <a href="https://discord.gg/R9fuT7Da95" target="_blank" className="ml" ><img src={UnlockH} alt="MintBtn" className="mintbtn"/></a> */}

      <img data-aos="fade-in" data-aos-easing="ease-in-out" src={firstImg} alt='Blendimage' className='imgbg' />
    </div>
  );
};

export default Home;
