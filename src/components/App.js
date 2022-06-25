import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Main from "./Main";
import Introduction from "./Introduction";
import history from "../history";
import logo from "../images/sky-media.jpeg";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="body-container">
        <Router history={history}>
          <Nav />
          <main className="main-container">
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
      </div>
    );
  }
}

export default App;
