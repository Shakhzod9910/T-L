import Image from "next/image"
import check from "../../assets/images/check.svg"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Prices = () =>{
    useEffect(()=>{
        AOS.init();
      },[])

    return(
            <section className="prices" id="price">
            <div className="prices-wrapper container">
                <div className="header"data-aos="fade-up">
                    <h1>Pricing Plan</h1>
                    <p>You can even use our demo version to check the whole system</p>
                </div>
                <div className="pro" data-aos="fade-up">
                    <h2>PRO PLAN</h2>
                    <h1>$100</h1>
                    <ul>
                        <li>
                            <p>Price per month for a driver</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>ELD</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>Fleet Management</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>Daily Driver logs</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>Asset Tracker</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>IFTA Reports</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>DVIR feature</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>GPS Tracking</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>Tracking History</p>
                        </li>
                        <li>
                            <Image src={check}/>
                            <p>HOS Violation alerts</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Prices