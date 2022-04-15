import Image from "next/image"
import feature1 from "../../assets/images/feature1.png"
import feature2 from "../../assets/images/feature2.png"
import feature3 from "../../assets/images/feature3.png"
import feature4 from "../../assets/images/feature4.png"
import partner1 from "../../assets/images/partner1.png"
import partner2 from "../../assets/images/partner2.png"
import partner3 from "../../assets/images/partner3.png"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Features = () => {

    useEffect(()=>{
        AOS.init();
      },[])

    return (
        <section className="features" id="features">
            <div className="features-wrapper container">
                    <div className="header" data-aos="fade-up">
                        <h1>Our Features</h1>
                        <p>These very extraordinary features can make trucking more efficient</p>
                    </div>
                <div className="features-box">
                        <div className="left" data-aos="fade-right">
                            <h1>ELD Compliance</h1>
                            <p>TMK ELD is an FMCSA registered and certified ELD solution offering truck drivers and companies of any size simple and reliable hours of service logging and tracking tool.</p>
                        </div>
                        <div className="right" data-aos="fade-left">
                            <div className="image-wrapper">
                                <Image src={feature1} alt="img"/>
                            </div>
                        </div>
                </div>
                <div className="features-box reverse">
                        <div className="right" data-aos="fade-right">
                            <div className="image-wrapper">
                                <Image src={feature2} alt="img"/>
                            </div>
                        </div>
                        <div className="left" data-aos="fade-left">
                            <h1>Asset Tracking</h1>
                            <p>Powered and non-powered assets (vehicles, trailers, equipment, containers, etc) are tracked in real-time with customizable alerts and notifications.</p>
                        </div>
                </div>
                <div className="features-box">
                        <div className="left" data-aos="fade-right">
                            <h1>GPS Tracking</h1>
                            <p>Know exactly when your drivers or vehicles enter or exit a specific area by creating zones and corresponding alerts or reports </p>
                        </div>
                        <div className="right" data-aos="fade-left">
                            <div className="image-wrapper">
                                <Image src={feature3} alt="img"/>
                            </div>
                        </div>
                </div>
                <div className="features-box reverse">
                        <div className="right" data-aos="fade-right">
                            <div className="image-wrapper">
                                 <Image src={feature4} alt="img"/>
                            </div>
                        </div>
                        <div className="left" data-aos="fade-left">
                            <h1>Get started in minutes</h1>
                            <p>Installation is quick and easy, no mechanics are needed. Simply plug in the Vehicle Gateway, connect to a phone or tablet, and drive.  For added convenience, manage  IFTA and DVIR in one compliance solution</p>
                        </div>
                </div>
                <div className="partners" id="partners" data-aos="fade-up">
                    <h1>Partners</h1>
                    <p>Through global Partner network to greater technological advance</p>
                    <ul data-aos="fade-up">
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner1} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner2} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner3} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner1} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner2} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner3} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner1} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner2} alt="logo"/></a>
                        </li>
                        <li>
                            <a href="https://rndd.uz/cgi-sys/suspendedpage.cgi"><Image src={partner3} alt="logo"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Features;