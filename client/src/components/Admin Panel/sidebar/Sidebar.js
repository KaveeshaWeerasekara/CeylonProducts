import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//Side Bar CSS files & Import Logo
import "../../../sass/Admin/sidebar.scss";
import "boxicons/css/boxicons.min.css";
import img from "../../../assets/CeylonLogo.jpeg";

//Side bar items
const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i className="bx bx-home"></i>,
    to: "/AdminPanel/",
    section: "",
  },
  {
    display: "Sellers",
    icon: <i className="bx bx-user"></i>,
    to: "/AdminPanel/Sellers",
    section: "Sellers",
  },
  {
    display: "Products",
    icon: <i class="bx bx-package"></i>,
    to: "/AdminPanel/Products",
    section: "Products",
  },
  {
    display: "Orders",
    icon: <i className="bx bx-receipt"></i>,
    to: "/AdminPanel/Orders",
    section: "Orders",
  },
  {
    display: "Earnings",
    icon: <i class="bx bxs-badge-dollar"></i>,
    to: "/AdminPanel/Earnings",
    section: "Earnings",
  },
  {
    display: "Seller Verification",
    icon: <i className="bx bx-key"></i>,
    to: "/AdminPanel/Verification",
    section: "Verification",
  },
];

const Sidebar = () => {

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
        ".sidebar__menu__item"
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
    <div className="sidebar">
      <div className="sidebar__logo">
        <a href="/AdminPanel/">
          <img className=" sidebar__logo  " src={img} alt="CeyloanProduct" />
        </a>
      </div>

      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
