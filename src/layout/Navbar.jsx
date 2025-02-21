import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";

const SmoothScrollLink = ({ to, children, isActive, setActiveSection, ...props }) => {
  const handleClick = (e) => {
    if (!to || typeof to !== "string") return;

    if (to.startsWith("#")) {
      e.preventDefault();
      const targetId = to.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });

        setActiveSection(targetId);
      }
    }
  };

  return (
    <a
      href={to || "#"}
      onClick={handleClick}
      className={`nav-link ${isActive ? "active" : ""}`}
      {...props}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const ref = useRef(null);
    useOnclickOutside(() => {
      closeDropdown();
    }, ref);

    return {
      isOpen,
      toggleDropdown,
      closeDropdown,
      ref,
    };
  };

  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showmenu, setBtnIcon] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setBtnIcon(!showmenu);
  };
  
  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");

    if (!header) return;

    const sticky = header.offsetTop;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop?.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop?.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  // 🔹 현재 활성화된 섹션 감지 (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px", // 🔹 하단 여백 감지
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    console.log("현재 활성 섹션:", activeSection);
  }, [activeSection]);

  return (
    <nav className="navbar transition">
      <div className="container">

        {/* Logo */}
        <SmoothScrollLink className="navbar-brand" to="/">
          <img src="./img/ui/logo.png" className="img-fluid d-md-block d-none imginit" alt="logo"/>
          <img src="./img/ui/logo.png" className="img-fluid d-md-none d-sms-none imginit" alt="logo"/>
        </SmoothScrollLink>

        {/* 모바일 메뉴 */}
        <div className={`mobile ${menuActive ? "active" : ""}`}>
          {showmenu && (
            <div className="menu">
              <div className={`navbar-item counter ${activeSection === "home" ? "active" : ""}`}>
                <SmoothScrollLink to="#home" isActive={activeSection === "home"} setActiveSection={setActiveSection}>
                  Home
                </SmoothScrollLink>
              </div>
              <div className={`navbar-item counter ${activeSection === "about" ? "active" : ""}`}>
                <SmoothScrollLink to="#about" isActive={activeSection === "about"} setActiveSection={setActiveSection}>
                  About
                </SmoothScrollLink>
              </div>
              <div className={`navbar-item counter disabled ${activeSection === "staking" ? "active" : ""}`}>
                <SmoothScrollLink to="#staking" isActive={activeSection === "staking"} setActiveSection={setActiveSection}>
                  Staking
                </SmoothScrollLink>
              </div>
              <div className={`navbar-item counter disabled ${activeSection === "farming" ? "active" : ""}`}>
                <SmoothScrollLink to="#farming" isActive={activeSection === "farming"} setActiveSection={setActiveSection}>
                  Farming
                </SmoothScrollLink>
              </div>
              <div className="navbar-item counter">
                <a href="https://axf-1.gitbook.io/axf-docs/" target="_blank" rel="noopener noreferrer">Docs</a>
              </div>
            </div>
          )}
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="desktop">
          <div className="menu">
            <div className={`navbar-item counter ${activeSection === "home" ? "active" : ""}`}>
              <SmoothScrollLink to="#home" isActive={activeSection === "home"} setActiveSection={setActiveSection}>
                Home
              </SmoothScrollLink>
            </div>
            <div className={`navbar-item counter ${activeSection === "about" ? "active" : ""}`}>
              <SmoothScrollLink to="#about" isActive={activeSection === "about"} setActiveSection={setActiveSection}>
                About
              </SmoothScrollLink>
            </div>
            <div className={`navbar-item counter disabled ${activeSection === "staking" ? "active" : ""}`}>
              <SmoothScrollLink to="#staking" isActive={activeSection === "staking"} setActiveSection={setActiveSection}>
                Staking
              </SmoothScrollLink>
            </div>
            <div className={`navbar-item counter disabled ${activeSection === "farming" ? "active" : ""}`}>
              <SmoothScrollLink to="#farming" isActive={activeSection === "farming"} setActiveSection={setActiveSection}>
                Farming
              </SmoothScrollLink>
            </div>
            <div className="navbar-item counter">
              <a href="https://axf-1.gitbook.io/axf-docs/" target="_blank" rel="noopener noreferrer">Docs</a>
            </div>
          </div>
        </div>

        {/* 메뉴 사이드 버튼 */}
        <div className="menu_side_area">
          <a href="https://x.com/AxF_gaming" target="_blank" rel="noopener noreferrer">
            <img className="connectimg" src="./img/icons/x-sns.png" alt="X" />
          </a>
          <button className={`burgermenu ${menuActive ? "active" : ""}`} type="button" onClick={toggleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
