import React, { useEffect } from "react";
import Aos from "aos";
import "../../components/Home/content.css";
import room from "../../img/2ndbg.jpg";
import avatar from "../../img/3rdimg.png";
import cmgsoon from "../../img/comingsoon.png";

export const Content = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div></div>{" "}
      <div className='container-fluid'>
        <div className='row'>
          <div data-aos='fade-right' className='col-xl-6 col-lg-6 col-md-6'>
            <h1 className='heading1' id='Community'>
              {" "}
              A Community Built Metaverse{" "}
            </h1>
            <p className='desc1'>
            Detangled World is a Pocket Metaverse for the “doers” of WEB3.<br /> Our Goal is to set up building blocks for all the builders of the future to co-create a social experience never seen before.
            Our social metaverse unlocks the true potential of your brand with a Global access point enabling digital builders to freely build products/services powered by the blockchain. 
            We aim to become a decentralized Community built metaverse soon after the initial phases have commenced. 
              {/* Detangled World is a Pocket Metaverse for Thinkers &amp; Creators.
              Our social metaverse is free to play and unlocks the true
              potential of your brand with a Global access point. Unity game
              engine and Blender 3D makes it possible for our Artists and Devs
              to be able to deliver three unique Virtual Spaces to begin your
              journey into the Metaverse
              <br />
              <br />
              We aim to become India’s first Community build metaverse, Soon
              after the public Sale we will release the Standard operating
              procedures to submit and create your own digital assets &amp; how
              to port into the Game simulation. */}
            </p>
          </div>
          <div data-aos='fade-left' className='col-xl-6 col-lg-6 col-md-6'>
            <img src={room} alt='mp4' className='img-fluid img1' />
          </div>
        </div>
        <div className='row rev'>
          <div data-aos='fade-right' className='col-xl-6 col-lg-6 col-md-6'>
            <img
              src={avatar}
              alt='responsive webite'
              className='img-fluid img2'
            />
          </div>
          <div data-aos='fade-left' className='col-xl-6 col-lg-6 col-md-6'>
            <h2 className='heading2'>Your personal space in our Metaverse</h2>
            <p className='desc2'>
            A Space your digital goods can live in our open world. Detangled Spaces will be split up in three types. 
            Each Detangled Space has its own “Vibe”. Detangled Spaces will be curated by the Creator Guild and will be open to the owner to customize or upgrade by acquiring a creator pass. 
            Experiences such as Multiplayer Games, Virtual Office, Virtual Discord server hangout space, NFT Gallery and many more. Possibilities are endless.
              {/* A Space your digital goods can live in our open world. Showcase
              your curated 3D virtual space with the collected digital goods to
              your friends and followers.
              <br />
              Connect your wallet to display your Valuable NFTs. Invite your
              friends and followers to your Space in the Metaverse to create
              experiences together such as Multiplayer Games, Virtual Office,
              Virtual Discord server hangout space, NFT Gallery and many more.
              Possibilities are endless. */}
            </p>
          </div>
        </div>
        <img
          data-aos='fade-in'
          src={cmgsoon}
          className='cmgsoon'
          alt='coming soon'
        />
      </div>
    </>
  );
};

export default Content;
