import x from "../../assets/images/x.png";
import Logo from "../../assets/images/Logo.png"

import { useContext, useEffect, useRef } from "react";
import { contextApi } from "../../context";

const Sidebar = () => {
  const sidebarRef = useRef();
  const { closeSidebar, isSidebarOpen } = useContext(contextApi);

  const sidebars = isSidebarOpen ? `showSidebar sidebar` : "sidebar";
  useEffect(() => {
    const changingSize = window.addEventListener("resize", (e) => {
      const sidebarWidth = sidebarRef?.current?.getBoundingClientRect();
      const { width } = sidebarWidth;
      if (width >= 900) {
        closeSidebar();
      }
    });
    return () => window.removeEventListener("resize", changingSize);
  }, [sidebarRef]);

  return (
    <section className={sidebars} ref={sidebarRef}>
      <aside>
        <div className="sidebar__header">
          <div className="navbar__brand">
          <img src={Logo} alt="Logo" />
          </div>
          <button className="sidebar__remove" onClick={closeSidebar} style={{cursor: 'pointer'}}>
            <img src={x} alt="cross icon" />
          </button>
        </div>

        <ul className="sidebar__menu">
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#destinations">Destinations</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#hotels">Hotels</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#flights">Flights</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#bookings">Bookings</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#login">Login</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#signup">Sign up</a>
            </button>
          </li>
        </ul>
      </aside>
    </section>
  );
};
export default Sidebar;