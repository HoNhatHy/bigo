import React from "react";

import one from "../images/idols/1.jpg";
import two from "../images/idols/2.jpg";
import three from "../images/idols/3.jpg";
import four from "../images/idols/4.jpg";
import five from "../images/idols/5.jpg";
import six from "../images/idols/6.jpg";
import seven from "../images/idols/7.jpg";
import eight from "../images/idols/8.jpg";
import nine from "../images/idols/9.jpg";
import ten from "../images/idols/10.jpg";
import eleven from "../images/idols/11.jpg";
import twelve from "../images/idols/12.jpg";
import thirteen from "../images/idols/13.jpg";
import fourteen from "../images/idols/14.jpg";
import fifteen from "../images/idols/15.jpg";
import sixteen from "../images/idols/16.jpg";
import seventeen from "../images/idols/17.jpg";
import eighteen from "../images/idols/18.jpg";
import nineteen from "../images/idols/19.jpg";
import twenty from "../images/idols/20.jpg";
import hienthanh from "../images/idols/hienthanh.jpg";

class Main extends React.Component {
  componentDidMount() {
    if (window.innerWidth < 700) {
      const navLinks = Array.from(document.querySelectorAll(".nav-item"));

      navLinks[0].classList.add("border-pink");
      navLinks[1].classList.remove("border-pink");
      navLinks[2].classList.remove("border-pink");
    }
  }

  render() {
    return (
      <div className="home-page">
        <div className="hero-section flex-center">
          <h1 className="primary-heading">
            Tìm kiếm <span> Streamer Việt Nam </span>
          </h1>
          <p className="primary-heading-description">
            Thu nhập khủng từ $200 - $5000
          </p>
          <button
            onClick={() => {
              document.querySelector(".require-benefit").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="hero-btn btn-white btn-animated  btn"
          >
            Tìm hiểu thêm
          </button>
        </div>
        <div className="require-benefit container">
          <div className="require">
            <h2>Yêu cầu đơn giản</h2>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Nam/nữ trên 18 tuổi, có CMND và thẻ ngân hàng</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Ưu tiên ngoại hình, có cá tính riêng</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Hát hay, chơi nhạc cụ, nhảy đẹp là một lợi thế</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Ưu tiên có thiết bị livestream và background đẹp</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Nghiêm túc với công việc và siêng năng</span>
              </li>
            </ul>
          </div>
          <div className="benefit">
            <h2>Quyền lợi</h2>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Thu nhập khủng: mức lương có thể lên đến hàng trăm triệu đồng
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Cơ hội phát triển: có nhiều cơ hội để phát triển về tài năng,
                  cơ hội thay đổi bản thân và kinh tế gia đình
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Định hướng tương lai: Được đào tạo bài bản, định hướng trở
                  thành IDOL chuyên nghiệp phù hợp với khả năng
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="require-icon icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Đội ngũ hỗ trợ: hỗ trợ thiết bị live, phòng live (nếu idol ở
                  TPHCM). Có admin hỗ trợ liên tục. Được push để tiếp cận user 1
                  cách tốt nhất
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container idols-container flex-center">
          <div className="idols-box">
            <div className="idols">
              <img src={one} alt="bigolive idols" />
              <img src={two} alt="bigolive idols" />
              <img src={three} alt="bigolive idols" />
              <img src={four} alt="bigolive idols" />
              <img src={five} alt="bigolive idols" />
              <img src={six} alt="bigolive idols" />
              <img src={seven} className="seven-eight" alt="bigolive idols" />
              <img src={eight} className="seven-eight" alt="bigolive idols" />
              <img src={nine} alt="bigolive idols" />
              <img src={ten} alt="bigolive idols" />
              <img
                src={hienthanh}
                className="hienthanh-img"
                alt="bigolive idols"
              />
              <img src={eleven} alt="bigolive idols" />
              <img src={twelve} alt="bigolive idols" />
              <img src={thirteen} alt="bigolive idols" />
              <img src={fourteen} alt="bigolive idols" />
              <img src={fifteen} alt="bigolive idols" />
              <img src={sixteen} alt="bigolive idols" />
              <img src={seventeen} alt="bigolive idols" />
              <img src={eighteen} alt="bigolive idols" />
              <img src={nineteen} alt="bigolive idols" />
              <img src={twenty} alt="bigolive idols" />
            </div>
            <div className="idols-heading-box flex-center">
              <h2>Streamers nổi bật</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
