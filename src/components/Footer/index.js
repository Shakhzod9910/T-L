import Image from "next/image"
import tmkeld from "../../assets/icons/tmkeld.svg"
import gps from "../../assets/icons/gps.svg"
import mail from "../../assets/icons/mail.svg"
import phone from "../../assets/icons/phone.svg"
import youtube from "../../assets/icons/youtube.svg"
import instagram from "../../assets/icons/instagram.svg"
import telegram from "../../assets/icons/telegram.svg"
import scrollToElement from 'scroll-to-element'
import { Fade } from "react-reveal"
const Footer = () => {
    const scrollToFunc = (el) => {
        scrollToElement(`#${el}`, {
             offset: 0,
             duration: 500,
             ease: 'linear'
        });
        
   }
    return (
        <footer>
            <Fade bottom>
            <div className="footer-wrapper container">
                <ul className="links">
                    <li onClick={() => scrollToFunc("home")}>home</li>
                    <li onClick={() => scrollToFunc('products')}>products</li>
                    <li onClick={() => scrollToFunc('features')}>Features</li>
                    <li onClick={() => scrollToFunc('price')}>Pricing Plans</li>
                    <li onClick={() => scrollToFunc('partners')}>partners</li>
                    <li onClick={() => scrollToFunc('home')}>About us</li>
                </ul>
                <div className="footer-items">
                    <ul>
                        <li>
                            <div className="logo-wrapper">
                                <Image src={tmkeld} alt="logo"/>
                            </div>
                            <p>The easiest way to use ELD device and application</p>
                        </li>
                        <li>
                            <span><div className="img"><Image src={phone} alt="icon"/></div>(33) 555-01-30</span>
                            <span><div className="img"><Image src={mail} alt="icon"/></div>willie.jennings@example.com</span>
                            <span><div className="img"><Image src={gps} alt="icon"/></div>Georgia 12473 United States</span>
                        </li>
                        <li>
                            <div className="massengers">
                                <div className="img"><Image src={youtube} alt="icon"/></div>
                                <div className="img"><Image src={instagram} alt="icon"/></div>
                                <div className="img"><Image src={telegram} alt="icon"/></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </Fade>
        </footer>
    )
}

export default Footer