import React, { useEffect } from "react";
import Aos from "aos";
import "./navbar.css";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectWalletButton } from "./ConnectWalletButton";

const Navbar = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <nav data-aos="fade-in" className='navbar navbar-light navbar-expand-md justify-content-md-center justify-content-start'>
      <ul className='navbar-nav mx-auto text-md-center text-left menu1 d-flex'>
        <h3>Detangled <b>World</b></h3>
        <ConnectWalletButton className="d-md-none py-2" />
      </ul>
      <div
        className='navbar-collapse collapse justify-content-between align-items-center w-100'
        id='collapsingNavbar2'>
        <ul className='navbar-nav mx-auto text-md-center text-left menu'>
          <li className='nav-item my-auto'>
            <a
              className='nav-link navbar-brand mx-0 d-none d-md-inline navitem'
              href='#Community'>
              Home
            </a>
          </li>
          <li className='nav-item my-auto'>
            <a
              className='nav-link navbar-brand mx-0 d-none d-md-inline navitem'
              href='#ROADMAP'>
              Roadmap
            </a>
          </li>
          <li className='nav-item my-auto'>
            <a
              className='nav-link navbar-brand mx-0 d-none d-md-inline navitem'
              href='#UTILITY'>
              Utility
            </a>
          </li>
        </ul>
        <ul className='nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap hov'>
          <a
            className='nav-link hov'
            href='https://discord.gg/R9fuT7Da95'
            target='_blank'>
            <FaDiscord className='fa-discord' />
          </a>
          <a
            className='nav-link hov'
            href='https://twitter.com/UnlockYourVibe'
            target='_blank'>
            <FaTwitter className='fa-twitter' />
          </a>
          <ConnectWalletButton />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
