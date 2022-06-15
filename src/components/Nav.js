import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <img
          className="sky-media-logo"
          src={require("../images/sky-media.jpeg")}
          alt="Sky-media"
        />
        <div className="nav-items">
          <Link to="/" className="nav-item link">
            Trang chủ
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Giới thiệu
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Đăng ký Idol
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Spy group
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Đăng ký AGC
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Quản lý
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Gia đình Spy
          </Link>
          <Link to="/gioi-thieu" className="nav-item link">
            Tin tức
          </Link>
        </div>
        <div className="nav-btn-box">
          <button className="nav-signup-btn btn">Đăng ký Idol</button>
        </div>
      </nav>
    );
  }
}

export default Nav;
