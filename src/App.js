
import './App.css';
import { useEffect, useState } from 'react';
import Features from './components/Features';
import Header from './components/Header';
import HomeAssistant from './components/HomeAssistant';
import NexAi from './components/NexAi';
import Blockchain from './components/Blockchain';
import Utility from './components/Utility';
import Presale from './components/Presale';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import BackToTop from './assets/images/webp/BackToTop.webp'
import Loader from './components/Loader';

function App() {
  // -------------------preloader------------------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg")
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg")
      setScreenLoading(false);
    }, 3000);
  }, []);
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <Header />
            <HomeAssistant />
            <Features />
            <NexAi />
            <Blockchain />
            <Utility />
            <Presale />
            <GetInTouch />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-[#08090E] backToTop_animate cursor-pointer border-[2px] border-solid border-[#0066FF] transition-all ease-linear duration-300 right-[2%] z-30" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </>
  );
}

export default App;
