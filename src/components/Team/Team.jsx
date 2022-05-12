import React, { useEffect } from 'react'
import Aos from "aos";
import "./team.css"
import {FaInstagram , FaTwitter,FaLinkedin,FaBehanceSquare} from "react-icons/fa";
import samurai from "../../img/DwSamuraizan.png"
import aradhana from "../../img/DWAradhana.png"
import tarun from "../../img/DWTarun.png"
import ufe from "../../img/DWUfe.png"
import yesh from "../../img/DWYesh.png"


const Team = () => {

useEffect(() => {
Aos.init({duration:2000});
},[]);

return (<>
  <h2 data-aos="fade-in" data-aos-easing="ease-in-out" className="mot"> MEET OUR TEAM </h2>
  <div data-aos="fade-in" data-aos-easing="ease-in-out" className="container">
    <div className="grid">
      <div className="row2 ">
        <div className="profile-card">
          <div className="img">
            <img src={samurai} /> </div>
          <div className="caption">
            <h3>Samuraizan</h3>
            <p>Web3 Warrior</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ashwin-panicker-40865942/" target="_blank">
                <FaLinkedin className="fab fa-linkedin-in" />
              </a>
              {/* <a href="#">
                <FaInstagram className="fab fa-instagram" target="_blank" />
              </a> */}
              <a href="https://twitter.com/Samuraizann">
                <FaTwitter className="fa-twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={aradhana} />
          </div>
          <div className="caption">
            <h3>Aradhana</h3>
            <p>Artist</p>
            <div className="social-links">
              {/* <a href="#">
                <FaLinkedin className="fab fa-linkedin-in" target="_blank" />
              </a> */}
              <a href="https://www.instagram.com/naturalista_blog/" target="_blank">
                <FaInstagram className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/Aradhwin" target="_blank">
                <FaTwitter className="fa-twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={tarun} />
          </div>
          <div className="caption">
            <h3>Tarun</h3>
            <p>
              Game Tester
            </p>
            <div className="social-links">
              <a href="https://www.behance.net/tarun_thusu" target="_blank">
                <FaBehanceSquare className="fab fa-behance" />
              </a>
              <a href="https://www.instagram.com/tarun_thusu/" target="_blank">
                <FaInstagram className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/tarunthusu" target="_blank">
                <FaTwitter className="fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row2 r2">
        <div className="profile-card">
          <div className="img">
            <img src={ufe} />
          </div>
          <div className="caption">
            <h3>UFE</h3>
            <p>
              Blockchain Developer
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ufedojo-atabo" target="_blank">
                <FaLinkedin className="fab fa-linkedin-in" />
              </a>
              {/* <a href="#">
                <FaInstagram className="fab fa-instagram" target="_blank" />
              </a> */}
              <a href="https://twitter.com/ufedojo_dev" target="_blank">
                <FaTwitter className="fa-twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={yesh} />
          </div>
          <div className="caption">
            <h3>Yesh</h3>
            <p>
              Web Wizard
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/yeshwanthreddyvallela/" target="_blank">
                <FaLinkedin className="fab fa-linkedin-in" />
              </a>
              <a href="https://www.instagram.com/predator0430/" target="_blank">
                <FaInstagram className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/yeshvallela" target="_blank">
                <FaTwitter className="fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>);
}

export default Team