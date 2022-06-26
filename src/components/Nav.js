import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.navItems = React.createRef();
  }

  state = { navBtn: "menu" };

  componentDidMount() {
    this.showStickyBar();
  }

  showStickyBar = () => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.getBoundingClientRect().height;
    const mainContainer1 = document.querySelector(".main-container1");

    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        nav.classList.add("sticky");
      } else nav.classList.remove("sticky");
    };

    const mainObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `${navHeight * 1.5}px`,
    });

    mainObserver.observe(mainContainer1);
  };

  onMenuClose = () => {
    this.setState({
      navBtn: "menu",
    });

    this.navItems.current.style.transform = "translateX(-100%)";
  };

  onMenuOpen = () => {
    this.setState({
      navBtn: "close",
    });

    this.navItems.current.style.transform = "translateX(0)";
  };

  render() {
    return (
      <nav className="nav">
        <button
          className="nav-btn btn"
          onClick={() => {
            if (this.state.navBtn === "menu") {
              this.onMenuOpen();
            } else {
              this.onMenuClose();
            }
          }}
        >
          {this.state.navBtn === "menu" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <div className="nav-container">
          <Link to="/">
            <img
              className="spy-media-logo"
              src={require("../images/sky-media.jpeg")}
              alt="Sky-media"
            />
          </Link>
          <div className="nav-items" ref={this.navItems}>
            <Link to="/" className="nav-item link" onClick={this.onMenuClose}>
              Trang chủ
            </Link>
            <Link
              to="/gioi-thieu"
              className="nav-item link"
              onClick={this.onMenuClose}
            >
              <span>Giới thiệu</span>
            </Link>
            <Link
              to="/hoat-dong-team"
              className="nav-item link"
              onClick={this.onMenuClose}
            >
              Hoạt động của team
            </Link>
          </div>
          <div className="nav-btn-box">
            <button className="nav-signup-btn btn">Đăng ký Idol</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
