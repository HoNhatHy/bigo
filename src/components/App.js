import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Main from "./Main";
import Introduction from "./Introduction";
import history from "../history";
import logo from "../images/sky-media.jpeg";
import phone from "../images/phone.png";
import messenger from "../images/messenger.png";
import tiktok from "../images/tiktok.png";

class App extends React.Component {
  state = { upBtn: "" };

  constructor(props) {
    super(props);
    this.sideBarContainer = React.createRef();
    this.linkContainer = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="body-container">
        <Router history={history}>
          <Nav />
          <main className="main-container">
            <div className="main-container1"></div>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/gioi-thieu" exact component={Introduction} />
            </Switch>
          </main>
          <footer>
            <h2 className="sologan container ">
              " Spy Media tự hào là đôi cánh chắp ước mơ các bạn bay cao.
              <span>
                Hãy đồng hành cùng chúng tôi để có một tương lai tốt đẹp hơn
                nhé! "
              </span>
            </h2>
            <div className="footer-container">
              <div className="company-logo">
                <img className="spy-logo" src={logo} alt="TH Vega logo" />
                <div className="medias">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/suahatorinut"
                    className="media"
                  >
                    <img
                      src="https://raw.githubusercontent.com/HoNhatHy/th-vega-version-2/main/Image/logo-facebookpng-32204.png"
                      alt="Fanpage Facebook"
                      className="media-logo"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/suahatorinut/?fbclid=IwAR3MT8u6V2pEqZIoHX_KbfxPDc_JlFdyp4VJo3lO1czhivyeMIaNyqzea9c"
                    className="media"
                  >
                    <img
                      src="https://raw.githubusercontent.com/HoNhatHy/th-vega-version-2/main/Image/logo-ig-png-32459.png"
                      alt="Fanpage Instagram"
                      className="media-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="medias-container">
                <p className="copyright">
                  Copyright &#169; 2022 Spy media net work. All rights reserved
                </p>
              </div>
              <div className="company-infors">
                <h3>Liên hệ</h3>
                <p>Công ty TNHH MTV Spy Media</p>
                <p>
                  Trụ sở: 471 Lê Đức Thọ, phường 16, quận Gò Vấp, thành phố Hồ
                  Chí Minh
                </p>
                <p>SĐT: 0388.222.298 &mdash; Email: haiyen@gmail.com</p>
                <p>
                  MST: 2901270911 - Số ĐKKD: 2901270911 cấp ngày 06/08/2022 bởi
                  Sở KH và ĐT thành phố HCM
                </p>
              </div>
            </div>
          </footer>
        </Router>
        <div className="side-bar">
          <div
            className="side-bar-container flex-column-center"
            ref={this.sideBarContainer}
          >
            <div
              className="link-container flex-column-center"
              ref={this.linkContainer}
            >
              <a className="side-link" href="tel:+84905577176 ">
                <img src={phone} />
              </a>
              <a
                className="side-link"
                href="https://www.messenger.com/t/100006270889006"
              >
                <img src={messenger} />
              </a>
              <a
                className="side-link"
                href="https://www.tiktok.com/@sweetiestore"
              >
                <img src={tiktok} />
              </a>
            </div>
            <button
              className="side-btn btn flex-center"
              onClick={() => {
                if (this.state.upBtn) {
                  this.sideBarContainer.current.style.overflow = "inherit";
                  this.linkContainer.current.style.transform =
                    "translate(-50%, 0)";
                  this.setState({ upBtn: "" });
                } else {
                  setTimeout(
                    () =>
                      (this.sideBarContainer.current.style.overflow = "hidden"),
                    100
                  );
                  this.linkContainer.current.style.transform =
                    "translate(-50%, 200%)";
                  this.setState({ upBtn: "up" });
                }
              }}
            >
              {this.state.upBtn ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="up-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="up-icon icon"
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
