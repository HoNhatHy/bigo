import React from "react";

import team from "../images/introduction/team.jpg";

class Introduction extends React.Component {
  render() {
    return (
      <div className="container introduction">
        <div className="what-streamer">
          <h2 className="heading-secondary">
            Một ngành khá "hot" đối với cộng đồng giới trẻ
          </h2>
          <p className="content">
            Không chỉ tại Việt Nam mà trên toàn thế giới. Chắc hẳn có rất nhiều
            bạn cũng đang nuôi đam mê để theo đuổi nghề này. Trong bài viết này,
            chúng mình hãy cùng tìm hiểu về nghề streamer là gì, cũng như nguồn
            thu nhập của họ đến từ đâu nhé!
          </p>
          <div className="flex-column-center">
            <img className="team-img img" src={team} />
            <p className="img-description">
              Team Hải Yến tại sự kiện Bigo Gala 2020
            </p>
          </div>
          <p className="content">
            Streamer là những người thực hiện phát sóng trực tiếp (streaming)
            trên các nền tảng online như mạng xã hội . Nội dung họ truyền tải
            khi streaming thường là về cách chơi game (Liên Minh Huyền Thoại,
            Liên quân Mobile, PUBG,...), cover các bài hát, bình luận về một chủ
            đề nào đó đang “hot” trên mạng xã hội hay chỉ đơn giản là trò chuyện
            với nhau qua hình thức online.
          </p>
          <p className="content">
            Trong quá khứ, không ít người nghĩ rằng đây là một công việc vô bổ
            nhưng ở hiện tại, nó lại là một nghề cực hot với mức thu nhập
            “khủng”. Tuy là một job cực kỳ hấp dẫn nhưng nghề streamer cũng
            không phải “việc nhẹ lương cao”,”ngồi mát ăn bát vàng” như nhiều
            người vẫn nghĩ. Các streamer có một lịch làm việc dày đặc, họ phải
            ngồi trước màn hình máy tính ít nhất 8 tiếng/ngày để làm việc phục
            vụ khán giả. Họ ít có thời gian nghỉ ngơi và cũng phải đối mặt với
            vô vàn khó khăn, thử thách khi quyết theo nghề streamer chuyên
            nghiệp.
          </p>
          <p className="content">
            Nhắc đến những streamer đình đám trên thế giới, chúng ta sẽ nhớ ngay
            đến những cái tên đắt giá như: PewDiePie, Ninja, Myth, Shroud,
            TimTheTatman… Ở Việt Nam, nghề streamer cũng phát triển rực rỡ những
            năm gần đây và một vài cái tên đang tỏa sáng là: ViruSs, Pew Pew, Độ
            Mixi, Misthy, Linh Ngọc Đàm… Có thể nói họ hiện đang là nhân vật có
            tầm ảnh hưởng lớn đến giới trẻ Việt.
          </p>
        </div>
        <div className="component">
          <h2 className="heading-secondary">
            Hướng dẫn đăng kí làm STREAMER SPY MEDIA?
          </h2>
          <div className="steps flex-center">
            <div className="step flex-column-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="intro-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <p>Đăng kí ghi danh trực tiếp ở form sau</p>
            </div>
            <div className="step flex-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="right-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="step flex-column-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="intro-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
              <p>Nhân viên SPY liên lạc và xác nhận</p>
            </div>
            <div className="step flex-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="right-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="step flex-column-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="intro-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <p>Kiểm tra hợp đồng sau 2 ngày ghi danh</p>
            </div>
            <div className="step flex-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="right-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="step flex-column-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="intro-icon icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <p>Tiến hành kí hợp đồng online tại APP</p>
            </div>
          </div>
        </div>
        <div className="component">
          <h2 className="heading-secondary">Lương thưởng của Idol Streamer</h2>
          <div className="flex-center">
            <table>
              <tr>
                <th>Xếp loại</th>
                <th>Điều kiện 1 Đậu mới</th>
                <th>Điều kiện 2 Giờ live</th>
                <th>Điều kiện 3 Giờ live</th>
                <th>Lương chính thức (VND)</th>
              </tr>
              <tr>
                <td>20S</td>
                <td>30000000</td>
                <td>15</td>
                <td>10</td>
                <td>3.860.714.285,00</td>
              </tr>
              <tr>
                <td>19S</td>
                <td>25000000</td>
                <td>15</td>
                <td>10</td>
                <td>3.240.809.523,00</td>
              </tr>
              <tr>
                <td>18S</td>
                <td>21000000</td>
                <td>15</td>
                <td>10</td>
                <td>2.742.520.000,00</td>
              </tr>
              <tr>
                <td>17S</td>
                <td>18000000</td>
                <td>15</td>
                <td>10</td>
                <td>2.368.474.285,00</td>
              </tr>
              <tr>
                <td>16S</td>
                <td>15000000</td>
                <td>15</td>
                <td>10</td>
                <td>1.997.714.285,00</td>
              </tr>
              <tr>
                <td>15S</td>
                <td>12000000</td>
                <td>15</td>
                <td>10</td>
                <td>1.617.885.714,00</td>
              </tr>
              <tr>
                <td>14S</td>
                <td>10000000</td>
                <td>15</td>
                <td>10</td>
                <td>1.365.104.761,00</td>
              </tr>
              <tr>
                <td>13S</td>
                <td>8000000</td>
                <td>15</td>
                <td>10</td>
                <td>1.105.927.619,00</td>
              </tr>
              <tr>
                <td>12S</td>
                <td>6000000</td>
                <td>15</td>
                <td>10</td>
                <td>840.091.428,00</td>
              </tr>
              <tr>
                <td>11S</td>
                <td>5000000</td>
                <td>15</td>
                <td>10</td>
                <td>709.166.666,00</td>
              </tr>
              <tr>
                <td>10S</td>
                <td>4000000</td>
                <td>15</td>
                <td>10</td>
                <td>574.780.952,00</td>
              </tr>
              <tr>
                <td>9S</td>
                <td>3000000</td>
                <td>15</td>
                <td>10</td>
                <td>436.802.857,00</td>
              </tr>
              <tr>
                <td>8S</td>
                <td>2200000</td>
                <td>15</td>
                <td>10</td>
                <td>324.611.047,00</td>
              </tr>
              <tr>
                <td>7S</td>
                <td>1600000</td>
                <td>15</td>
                <td>10</td>
                <td>239.270.095,00</td>
              </tr>
              <tr>
                <td>6S</td>
                <td>1200000</td>
                <td>15</td>
                <td>10</td>
                <td>181.897.142,00</td>
              </tr>
              <tr>
                <td>5S</td>
                <td>900000</td>
                <td>15</td>
                <td>10</td>
                <td>138.936.428,00</td>
              </tr>
              <tr>
                <td>4S</td>
                <td>650000</td>
                <td>15</td>
                <td>10</td>
                <td>102.201.047,00</td>
              </tr>
              <tr>
                <td>3S</td>
                <td>400000</td>
                <td>20</td>
                <td>10</td>
                <td>64.062.666,00</td>
              </tr>
              <tr>
                <td>2S</td>
                <td>200000</td>
                <td>20</td>
                <td>10</td>
                <td>32.629.333,00</td>
              </tr>
              <tr>
                <td>S</td>
                <td>100000</td>
                <td>30</td>
                <td>15</td>
                <td>16.620.238,00</td>
              </tr>
              <tr>
                <td>A</td>
                <td>60000</td>
                <td>30</td>
                <td>15</td>
                <td>10.251.428,00</td>
              </tr>
              <tr>
                <td>B</td>
                <td>35000</td>
                <td>30</td>
                <td>15</td>
                <td>6.010.666,00</td>
              </tr>
              <tr>
                <td>C</td>
                <td>20000</td>
                <td>30</td>
                <td>20</td>
                <td>3.609.904,00</td>
              </tr>
              <tr>
                <td>E</td>
                <td>10000</td>
                <td>30</td>
                <td>20</td>
                <td>1.814.809,00</td>
              </tr>
              <tr>
                <td>F</td>
                <td>5000</td>
                <td>20</td>
                <td>10</td>
                <td>930.952,00</td>
              </tr>
              <tr>
                <td className="td-border-bottom">G</td>
                <td className="td-border-bottom">2000</td>
                <td className="td-border-bottom">20</td>
                <td className="td-border-bottom">10</td>
                <td className="td-border-bottom">383.333,00</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="component flex-center">
          <div className="testimonial">
            <img
              className="hienthanh-testimonial-img"
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272039850_3132419817047123_6054733328690641608_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DVeyQ3hTvCoAX9Kuccc&tn=NT89KOVnfwj5031I&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_99l-ZONhp8xjQqP45R9dTN4XCuShhPJSXZJuA4nBERw&oe=62BAD1F1"
            />
            <div className="share">
              <div>
                <p>
                  Do tôi và tổng giám đốc công ty SPY là bạn thân khi còn học
                  năm 2 đại học. Bạn ấy đã được tiếp xúc trước với công việc
                  STREAMER và có thu nhập đến mức ổn định và dư dã. Sau đó, tôi
                  cũng được SPY MEDIA mời vào team và có những thành công nhất
                  định. Thu nhập ban đầu của tôi là 6 triệu, lúc đó sinh viên
                  năm 2 mức thu nhập ấy cũng đc xem là cao so với mặt bằng chung
                  với các bạn sinh viên.
                </p>
                <p>
                  Streamer như chúng tôi không cần phải ra ngoài lăn lộn, chỉ ở
                  nhà rồi on mic, on screen và chiến thôi.
                </p>
                <p>
                  Tôi cũng được xem như là cây cỗ thụ của SPY MEDIA, cùng MEDIA
                  đồng hành cho đến hiện tại đã được 3 năm. Tôi cảm ơn và rất
                  vui khi được SPY MEDIA giúp đỡ trong thời gian chập chững, gục
                  ngã vì mệt mỏi và cho đến hiện tại.
                </p>
              </div>
              <div className="qoute">
                <p>
                  " Chia sẻ của chị Jungnan - Top 10 tại Đêm chung kết Bigo Gala
                  2020 "
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
