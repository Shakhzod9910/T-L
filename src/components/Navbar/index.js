import Image from "next/image";
import tmk from "../../assets/images/tmk.svg"
import scrollToElement from 'scroll-to-element'
const Navbar = () => {




     const scrollToFunc = (el) => {
          scrollToElement(`#${el}`, {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
          
     }




  return (
    <section className='navbar'>
      <div className="nav-wrapper container">
      <div className="logo-wrapper">
          <Image src={tmk} alt="logo"/>
      </div>
        <div className="links">
          <ul>
            <li onClick={() => scrollToFunc("home")}>Home</li>
            <li onClick={() => scrollToFunc('products')}>Products</li>
            <li onClick={() => scrollToFunc('features')}>Features</li>
            <li onClick={() => scrollToFunc('price')}>Pricing</li>
            <li onClick={() => scrollToFunc('request')}>Request demo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
