import Image from "next/image";
import devices from "../../assets/images/devices.png"
import scrollToElement from 'scroll-to-element'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Header = () => {

  const scrollToFunc = (el) => {
    scrollToElement(`#${el}`, {
         offset: 0,
         duration: 500,
         ease: 'linear'
    });
    
}

useEffect(()=>{
  AOS.init();
},[])

  return (
    <section className="header" id="home">
      <div className="header-wrapper container">
          <div className="left-side" data-aos="fade-right">
              <h1>Smart Fleet Managament Solutions</h1>
              <p>The easiest way to use ELD device and application</p>
              <button onClick={() => scrollToFunc('request')}>Get Started</button>
          </div>
          <div className="right-side" data-aos="fade-left">
            <div className="img-wrapper">
              <Image src={devices} alt="img" />
            </div>
          </div>
      </div>
    </section>
   
  );
};
export default Header;