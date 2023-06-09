import { useState, useEffect, useRef } from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {NavLinks} from "../../Constants"
import styles from "../../style";
import { arrowRight, close, logo } from "../../Assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 55) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleClickLink = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickLink, true);
    return () => {
      document.removeEventListener("click", handleClickLink, true);
    };
  });

  return (
    <nav 
    className={`${
      scrolled ? "bg-white shadow-navbar " : "bg-white"
    } w-full mx-auto px-5 sm:px-16 xl:px-0 fixed top-0 z-20`}
    >
      <div className={`w-full xl:max-w-[1280px] mx-auto bg-white   py-2  xl:px-0 ${styles.flexBetween}`} >
        <a href="#" className="logo ">
          <img
            src={logo}
            alt="olive"
            className="w-[50px] object-contain md:w-[60px] cursor-pointer "
          />
        </a>
        <div className={`navbar-links-desk sm:flex items-center justify-end flex-row hidden  flex-1`}>
          <ul className="flex">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-lato text-[16px] ${
                  active === nav.title ? "text-green font-bold" : "text-black"
                } 
                                ${
                                  index === NavLinks.length - 1
                                    ? "mr-0"
                                    : "mr-[40px] sm:mr-[50px] text-[15px] hover:font-bold lg:text-[17px] lg:leading-[20px]  md:mr-[70px] "
                                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`navbar-links-mobile sm:hidden  flex-1  z-[2] ${styles.flexEnd}`}
          ref={ref}
        >
          <div
            className="cursor-pointer"
            onClick={() => setToggle(true)}
          >
             <RiMenu3Line color="#000" size={26}/>
            </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } px-6 py-10 bg-green absolute right-0 top-0   w-full min-h-screen fixed navbar-links `}
          >
            <ul className="flex justify-start items-start flex-1 flex-col gap-7">
            <div
            className="flex  items-end justify-end w-full mb-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img src={close} alt="" className="w-[24px]" />  
            </div>
              {NavLinks.map((nav, index) => (
                <div className="flex flex-row items-center justify-between w-full border-b pb-5 "><li
                  key={nav.id}
                  className={`cursor-pointer font-bold font-lato text-[16px] ${active === nav.title ? "text-black" : "text-white"}
                        ${index === NavLinks.length   ? "mr-0" : "mr-10"} `}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`} className="">
                    {nav.title}
                  </a>
                </li><img src={arrowRight} alt="" /></div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
