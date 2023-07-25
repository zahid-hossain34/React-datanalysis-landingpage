import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import Buttons from "./Buttons";
const logo = require("../assets/logo.png");

const primaryButton= {
    backgroundColor: '#58BF73',
    borderRadius: '10px',
    color: '#fff',
    width: '163px',
    height: '52px',
    
  };

const secondaryButton= {
    backgroundColor: 'white',
    borderRadius: '10px',
    color: '#181F1B',
    width: '112px',
    height: '52px',
    border: '0.50px #181F1B solid',
  };

function Header() {
  return (
    <header className=" bg-white  border-b-[#F3F3F3] border-b-2 ">
      <div className="flex justify-between items-center w-full h-[92px] container">
        <div className="flex  items-center justify-between ">
          <div className="w-[202px] h-[40px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </div>
          <nav className="navigation w-[445px] ml-32">
            <ul>
              <li className="active">
                <a href="#product">Product</a>
                <AiOutlineDown className="inline-block text-sm text-[#1F8E3D]  ml-2 mb-2" />
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-10">
          <Buttons text="Get Started" style ={primaryButton} />
          <Buttons text="Login" style = {secondaryButton} />
        </div>
      </div>
    </header>
  );
}
export default Header;
