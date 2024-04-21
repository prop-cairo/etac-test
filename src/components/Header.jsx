import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { WP_API_BASE_URL } from "@/settings/wordPress";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const underlineRef = useRef(null);
  const navRef = useRef(null);

  const { data } = useQuery({
    queryKey: ["navigation"],
    queryFn: async () => {
      const response = await axios.get(
        `${WP_API_BASE_URL}/wp-json/wp/custom/current-menu`
      );
      return response.data;
    },
  });

  const handleMouseOver = (event) => {
    const target = event.currentTarget;
    const underline = underlineRef.current;
    underline.style.width = target.offsetWidth + "px";
    underline.style.left = target.offsetLeft + "px";
    underline.style.top = target.getBoundingClientRect().bottom + "px";
  };
  const handleMouseOut = () => {
    const underline = underlineRef.current;
    underline.style.width = 0;
  };

  const handleClick = (e) => {
    const toggle = e.currentTarget;
    toggle.classList.toggle("active");
    navRef.current.classList.toggle("active");
  };

  return (
    <header>
      <div className="header-logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="header-toggle" onClick={(e) => handleClick(e)}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className="header-nav" ref={navRef}>
        <ul>
          {data?.map((nav) => (
            <li key={nav.id}>
              <Link
                to={nav.url}
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={handleMouseOut}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <span className="header-nav-underline" ref={underlineRef}></span>
      </nav>
    </header>
  );
};

export default Header;
