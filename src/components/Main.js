import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="hero-section flex-center">
          <h1 className="primary-heading">Tìm kiếm Streamer Việt Nam</h1>
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
                  THU NHẬP KHỦNG: mức lương có thể lên đến hàng trăm triệu đồng
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
                  CƠ HỘI PHÁT TRIỂN: có nhiều cơ hội để phát triển về tài năng,
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
                  ĐỊNH HƯỚNG TƯƠNG LAI: Được đào tạo bài bản, định hướng trở
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
                  ĐỘI NGŨ HỖ TRỢ: hỗ trợ thiết bị live, phòng live (nếu idol ở
                  TPHCM). Có admin hỗ trợ liên tục. Được push để tiếp cận user 1
                  cách tốt nhất
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
