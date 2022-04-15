import link from "../../assets/icons/link.svg"
import map from "../../assets/icons/map.svg"
import bluetooth from "../../assets/icons/bluetooth.svg"
import location from "../../assets/icons/location.svg"
import Image from "next/image"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Products = () => {


    useEffect(()=>{
        AOS.init();
      },[])

    return (
        
            <section className="products" id="products">
            
            <div className="products-wrapper container">
                    <div className="section-header" data-aos="fade-up">
                        <h1>Our  Products & Services</h1>
                        <p>We provide a wide range of valuable services to fit your delivery needs.</p>
                    </div>
                <ul className="product-list">
                    <li data-aos="fade-up-right">
                        <div className="header">
                            <div className="icon">
                                <Image src={link}/>
                            </div>
                            <h1>ELD Compliance</h1>
                        </div>
                        <p>Manage your fleet with ease using the most comprehensive ELD solution on the market.</p>
                    </li>
                    <li data-aos="fade-up-right">
                        <div className="header">
                            <div className="icon">
                                <Image src={map}/>
                            </div>
                            <h1>Asset Tracking</h1>
                        </div>
                        <p>Safeguard your assets with a tracking device that effectively reduces costly losses and liabilities.</p>
                    </li>
                    <li data-aos="fade-up-left">
                        <div className="header">
                            <div className="icon">
                                <Image src={location}/>
                            </div>
                            <h1>GPS Tracking</h1>
                        </div>
                        <p>Know exactly when your drivers or vehicles enter or exit a specific area by creating zones and corresponding alerts or reports</p>
                    </li>
                    <li data-aos="fade-up-left">
                        <div className="header">
                            <div className="icon">
                                <Image src={bluetooth}/>
                            </div>
                            <h1>Easy connection</h1>
                        </div>
                        <p>Installation is quick and easy, no mechanics are needed. Simply plug in the Vehicle, connect to a phone or tablet, and drive. </p>
                    </li>
            </ul>
            </div>
            </section>
  );
};
export default Products;