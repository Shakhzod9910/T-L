import Image from "next/image"
import check from "../../assets/images/check.svg"
import { Fade } from "react-reveal"
const Prices = () =>{
    return(
        <Fade bottom>
            <section className="prices" id="price">
            <div className="prices-wrapper container">
                <div className="header">
                    <h1>Pricing Plan</h1>
                    <p>You can even use our demo version to check the whole system</p>
                </div>
                <div className="pro">
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
        </Fade>
    )
}

export default Prices