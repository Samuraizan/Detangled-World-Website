import React, { useEffect } from 'react'
import Aos from "aos";
import "./utility.css"
import mob from "../../img/mob.png"
import box from "../../img/box.png"
import meet from "../../img/meet.png"
import token from "../../img/token.png"
import showcase from "../../img/showcase.png"
import build from "../../img/builder.png"

const Utility = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  



  return (<><h2 data-aos="fade-in" data-aos-easing="ease-in-out" className="rm" id='UTILITY'>UTILITY</h2><div className="grid-container">
    <div data-aos="fade-right" className="grid-item ">
      <img src={mob} alt="Mobile" />
      <p>
        Our goal is to make it incredibly easy for anyone to build interactive spaces right from your smartphones.
      </p>
    </div>
    <div data-aos="fade-left" className="grid-item">
      <img src={box} alt="alt" />
      <p>
        Every Season, all Genesis Space holders will get a Mystery Loot box airdropped with loads of special Digital assets.
      </p>
    </div>
    <div data-aos="fade-right" className="grid-item">
      <img src={meet} alt="alt" />
      <p>
        Curate your own Virtual Event in the lobby area to get the most exposure in the metaverse.Co- Create your best Metaverse experience.</p>
    </div>
    <div data-aos="fade-left" className="grid-item ">
      <img src={token} alt="alt" />
      <p>
        Earn our Social Token by holding your access NFTs to buy digital assets to further enhance your Space. Collect rare items and display them!
      </p>
    </div>
    <div data-aos="fade-right" className="grid-item">
      <img src={showcase} alt="alt" />
      <p>
        Showcase your NFTs and perform Virtual auctions for better visibility of your digital assets.
      </p>
    </div>
    <div data-aos="fade-left" className="grid-item">
      <img src={build} alt="alt" />
      <p>
        Build your space with a flexible drag + drop room builder and inventory items created in collaboration with awesome artists.
      </p>
    </div>
  </div></>);
}

export default Utility;
