import Image from "next/image"
import mail from "../../assets/icons/mail.svg"
import phone from "../../assets/icons/phone.svg"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Request = () =>{
    useEffect(()=>{
        AOS.init();
      },[])

    return (
        <section className="request" id="request">
            <div className="request-wrapper container">
                <div className="left" data-aos="fade-right">
                   <div className="header"> 
                        <h1>Get in Touch</h1>
                        <p>We appreciate each company and we are proud that 60% of clients come back to work with us again.</p>
                        <span><div className="img"><Image src={phone} alt="icon"/></div>(33) 555-01-30</span>
                        <span><div className="img"><Image src={mail} alt="icon"/></div>willie.jennings@example.com</span>
                    </div>
                    <h2>Find Us on Map</h2>
                <p>Georgia 12473 United States</p>
                <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.5626775535225!2d12.456967916658554!3d41.90147517715246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2z0KDQuNC8LCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2s!4v1649421311610!5m2!1sru!2s"></iframe>
                </div>
                </div>
                
                <div className="right" data-aos="fade-left">
                    <h1>Request Demo</h1>
                    <p>Fill out the form and we will be in touch.</p>
                    <form>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Placeholder"/>
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder="kaidoe@gmail.com"/>
                        <label htmlFor="">Your message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Drop us a message"></textarea>
                        <label htmlFor="">Phone number</label>
                        <div className="sender">
                            <input type="number" placeholder="Placeholder"/>
                            <button type="submit">Send</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Request