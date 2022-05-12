import React, { useEffect } from "react";
import Aos from "aos";
import "../../components/roadmap/roadmap.css";

const Roadmap = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {" "}
      <h2
        data-aos='fade-in'
        data-aos-easing='ease-in-out'
        className='bp'
        id='ROADMAP'>
        {" "}
         BLUEPRINT
      </h2>{" "}
      <div
        data-aos='fade-in'
        data-aos-easing='ease-in-out'
        className='accordion'>
        <div className='box2 a1'>
          {" "}
          <div className='image_1'>
            <div className='text'>
              {/* <h2 className='ph'>PHASE 1</h2> */}
              <p className='gp'>
                Website/Landing Site with roadmap and plan of action.
              </p>
              <p className='gp'>Design implementation for Alpha Space.</p>
              <p className='gp'>Development of First Virtual Space.</p>
              <p className='gp'>Initialize Metaverse Architecture.</p>
            </div>
          </div>{" "}
        </div>

        <div className='box2 a2'>
          {" "}
          <div className='image_2'>
            <div className='text'>
              {/* <h2 className='ph ph2'>PHASE 2</h2> */}
              {" "}
              <p className='gp'>First Look of the Demo Lobby/Space.</p>
              <p className='gp'>
                Initiate Bug Bounty for “Believers” (Early Supporters)
              </p>
              <p className='gp'>Initiate Creator Onboarding SOPs</p>
              <p className='gp'>Team Huddle/ Pre Sale AMA</p>
            </div>
          </div>{" "}
        </div>

        <div className='box2 a3'>
          {" "}
          <div className='image_3'>
            <div className='text'>
              {/* <h2 className='ph ph3'>PHASE 3</h2> */}
              {" "}
              <p className='gp'>Genesis Spaces</p>
              <p className='gp'>Access Cards presale/public. TBA</p>
              {/* <p className='gp'>
                <b>200</b>- Testers
              </p>
              <p className='gp'>
                <b>1800</b>- Public Sale
              </p> */}
              <p className='gp'>Demo app launch for Android/IOS/Browser</p>
              <p className='gp'>Initiate Creator Pass Onboarding</p>
            </div>
          </div>{" "}
        </div>
        <div className='box2 a4'>
          {" "}
          <div className='image_4'>
            <div className='text'>
              {/* <h2 className='ph ph4'>PHASE 4</h2> */}
              {" "}
              <p className='gp'>
                Access Cards presale/public. <br /> 
                |—----Genesis Spaces : TBA
              </p>
              <p className='gp'>
                Creator Summit. - IRL MEET-UP
              </p>
              <p className='gp'>Multiplayer launch for Demo Spaces</p>
              <p className='gp'>Detangled Market Place</p>
              <p className='gp'>Production App Launch on Android/IOS</p>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default Roadmap;
