import Navbar from "../../src/components/Navbar";
import Header from "../../src/components/Header";
import Products from "../../src/components/Products";
import Features from "../../src/components/Features";
import Prices from "../../src/components/Prices";
import Request from "../../src/components/Request";
import Footer from "../../src/components/Footer";
const Main = () => {
 

  return (
    <section className="home">
      <Navbar/>
      <Header/>
      <Products/>
      <Features/>
      <Prices/>
      <Request/>
      <Footer/>
    </section>
  );
};
export default Main;
