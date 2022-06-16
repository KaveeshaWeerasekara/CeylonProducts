import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//Side Bar CSS files & Import Logo
import "../../../sass/Seller/sidebar1.scss";
import "boxicons/css/boxicons.min.css";
import img from "../../../assets/CeylonLogo1.png";

//Side bar items
const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i className="bx bx-home"></i>,
    to: "/SellerPanel/",
    section: "",
  },
  {
    display: "Orders",
    icon: <i className="bx bx-receipt"></i>,
    to: "/SellerPanel/Orders",
    section: "Orders",
  },
  {
    display: "Products",
    icon: <i class="bx bx-package"></i>,
    to: "/SellerPanel/Products",
    section: "Products",
  },
  {
    display: "Earnings",
    icon: <i class="bx bxs-badge-dollar"></i>,
    to: "/SellerPanel/Earnings",
    section: "Earnings",
  },
  
];

const Sidebar1 = () => {

  //Declare States
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  //...
  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar1__menu1__item1"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[2];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  //map side bar items
  return (
    <div className="sidebar1">
      <div className="sidebar1__logo1">
        <a href="/SellerPanel/">
          <img className=" sidebar1__logo1  " src={img} alt="CeyloanProduct" />
        </a>
      </div>

      <div ref={sidebarRef} className="sidebar1__menu1">
        <div
          ref={indicatorRef}
          className="sidebar1__menu1__indicator1"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar1__menu1__item1 ${
                activeIndex === index ? "active1" : ""
              }`}
            >
              <div className="sidebar1__menu1__item1__icon1">{item.icon}</div>
              <div className="sidebar1__menu1__item1__text1">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar1;
