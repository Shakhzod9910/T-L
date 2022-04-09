import Image from "next/image";
import devices from "../../assets/images/devices.png"
import scrollToElement from 'scroll-to-element'
const Header = () => {

  const scrollToFunc = (el) => {
    scrollToElement(`#${el}`, {
         offset: 0,
         duration: 500,
         ease: 'linear'
    });
    
}

  return (
    <section className="header" id="home">
      <div className="header-wrapper container">
        <div className="left-side">
            <h1>Smart Fleet Managament Solutions</h1>
            <p>The easiest way to use ELD device and application</p>
            <button onClick={() => scrollToFunc('request')}>Get Started</button>
        </div>

        <div className="right-side">
          <div className="img-wrapper">
            <Image src={devices} alt="img" />
          </div>
      </div>
      </div>
    </section>
   
  );
};
export default Header;