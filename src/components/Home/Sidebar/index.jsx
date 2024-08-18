import x from "../../../assets/images/x.png";
import Logo from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { contextApi } from "../../../context";

const Sidebar = () => {
  const sidebarRef = useRef();
  const { closeSidebar, isSidebarOpen } = useContext(contextApi);

  const sidebars = isSidebarOpen ? `showSidebar sidebar` : "sidebar";

  useEffect(() => {
    const changingSize = () => {
      const sidebarWidth = sidebarRef.current?.getBoundingClientRect();
      if (sidebarWidth) {
        const { width } = sidebarWidth;
        if (width >= 900) {
          closeSidebar();
        }
      }
    };

    window.addEventListener("resize", changingSize);
    return () => {
      window.removeEventListener("resize", changingSize);
    };
  }, [closeSidebar]);

  return (
    <section className={sidebars} ref={sidebarRef}>
      <aside>
        <div className="sidebar__header">
          <div className="navbar__brand">
            <img src={Logo} alt="Logo" />
          </div>
          <button className="sidebar__remove" onClick={closeSidebar} style={{ cursor: 'pointer' }}>
            <img src={x} alt="cross icon" />
          </button>
        </div>

        <ul className="sidebar__menu">
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <Link to="/destinations">Destinations</Link>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <Link to="/hotels">Hotels</Link>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <Link to="/about">About Us</Link>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <Link to="/bookings">Bookings</Link>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <Link to="/contact">Contact</Link>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Sidebar;
