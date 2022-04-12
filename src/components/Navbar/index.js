import Image from "next/image";
import tmk from "../../assets/images/tmk.svg"
import menu from "../../assets/icons/menu.svg"
import scrollToElement from 'scroll-to-element'
import { useState, useEffect } from "react";
import times from "../../assets/icons/times.svg"
const Navbar = () => {
  
  const [openmenu, setMenu] = useState("")
  const [current, setCurrent] = useState('home')

      useEffect(() => {
        window.scrollTo(0, 0)

        const scrollFunc = () => {
            setHashElement()
        }
        window.addEventListener('scroll', scrollFunc)
        return () => {
            window.removeEventListener('scroll', scrollFunc)
        }
      },[])

          const setHashElement = () => {
            const tabs = document.getElementById('nav')
            const windowY = window.scrollY

            const home = document.getElementById('home').offsetTop + tabs.offsetTop
            const product = document.getElementById('products').offsetTop + tabs.offsetTop
            const features = document.getElementById('features').offsetTop + tabs.offsetTop
            const price = document.getElementById('price').offsetTop + tabs.offsetTop
            const request = document.getElementById('request').offsetTop + tabs.offsetTop
            const summ = tabs.offsetHeight + tabs.offsetTop
            console.log(windowY)
            
              if (windowY >= request -50) {
                   setCurrent('request')
              } else if (windowY >= price) {
                   setCurrent('price')
              } else if (windowY >= features -50) {
                   setCurrent('features')
              } else if (windowY >= product -50) {
                   setCurrent('products')
              } else if (windowY >= home) {
                   setCurrent('home')
              }
         
          }


    



     const scrollToFunc = (el) => {
          scrollToElement(`#${el}`, {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
          setCurrent(el)
          remMenu()
     }


     const menuActive = (evt=>{
        setMenu("menu-active")
     })

     const remMenu = (evt=>{
        setMenu("")
     })
    


  return (
    <>
    <section id="nav" className='navbar'>
      <div className="nav-wrapper container">
        <div onClick={menuActive} className="menu-wrapper">
          <Image src={menu} alt="logo"/>
        </div>
      <div className="logo-wrapper">
          <Image src={tmk} alt="logo"/>
      </div>
        <div className="links">
          <ul className={openmenu}>
            <div className="times">
              <Image onClick={remMenu} src={times} alt="icon"/>
            </div>
            <li className={`${current === "home" ? 'active' : ''}`} onClick={() => scrollToFunc("home")}>Home</li>
            <li className={`${current === "products" ? 'active' : ''}`} onClick={() => scrollToFunc('products')}>Products</li>
            <li className={`${current === "features" ? 'active' : ''}`} onClick={() => scrollToFunc('features')}>Features</li>
            <li className={`${current === "price" ? 'active' : ''}`} onClick={() => scrollToFunc('price')}>Pricing</li>
            <li className={`${current === "request" ? 'active' : ''}`} onClick={() => scrollToFunc('request')}>Request demo</li>
          </ul>
        </div>
      </div>

    </section>
    
    </>
  );
};

export default Navbar;
