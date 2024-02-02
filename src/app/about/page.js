import React from 'react'
import styles from './About.module.scss'
import classNames from 'classnames/bind'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const cx = classNames.bind(styles)

const About = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <img src='https://images.pexels.com/photos/5648421/pexels-photo-5648421.jpeg' alt='background' className={cx('background')} />
        <div className={cx('heading_info')}>
          <h3 className={cx('heading_title')}>Thông tin</h3>
          <p className={cx('about')}>Thông tin về chúng tôi</p>
        </div>
        <div className={cx('overlay')}></div>
      </div>

      <div className={cx('reviews')}>
        <h3 className={cx('heading_title')}>Khách hàng nói gì về chúng tôi</h3>
        <p className={cx('about')}>Lời chứng thực</p>
        <div className={cx('icon')}>
          <FormatQuoteIcon className={cx('icon_img')} />
        </div>
        <p className={cx('message')}>Chúng tôi đã sử dụng dịch vụ taxi của bạn lần đầu tiên sau khi xem các báo cáo trực tuyến tốt. Người lái xe rất hiệu quả và thông minh với một chiếc xe rất sạch sẽ. Chúng tôi muốn nói lời cảm ơn sâu sắc vì dịch vụ tuyệt vời và chúng tôi chắc chắn sẽ giới thiệu cho bạn bè và gia đình và sử dụng lại dịch vụ của bạn. Bạn là người giỏi nhất, hãy tiếp tục như vậy.</p>
      </div>

      <div className={cx('services' ,'grid')}>
        <img src='https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg' className={cx('background')} />
        <div className={cx('heading_info')}>
          <h3 className={cx('heading_title')}>Những dịch vụ mà chúng tôi đem lại</h3>
          <p className={cx('about')}>Chào mừng đến với chúng tôi</p>
          <p className={cx('message')}>Chúng tôi đã tạo ra taxi của mình để giúp bạn tìm thấy các dịch vụ taxi chất lượng cao nhất và đáng tin cậy nhất, mọi lúc, mọi nơi. <br />Tất cả các tài xế của chúng tôi đều mặc đồng phục và được cấp phép đầy đủ.</p>
        
          <ul className= {cx('services_list', 'row')}>
          <li className={cx('services_item', 'col l-3 m-3 c-12')}>
            <AddLocationAltIcon className={cx('item_icon')} />
            <h3 className={cx('item_title')}>Nhận địa chỉ</h3>
            <p className={cx('item_description')}>Chúng tôi luôn đón khách hàng đúng giờ, sẵn sàng phục vụ 24/7.</p>
          </li>

          <li className={cx('services_item', 'col l-3 m-3 c-12')}>
            <FlightLandIcon className={cx('item_icon')} />
            <h3 className={cx('item_title')}>Đưa đón sân bay</h3>
            <p className={cx('item_description')}>TaxiBuonMaThuat chuyên cung cấp dịch vụ đưa đón sân bay 24/24.</p>
          </li>

          <li className={cx('services_item', 'col l-3 m-3 c-12')}>
            <SocialDistanceIcon className={cx('item_icon')} />
            <h3 className={cx('item_title')}>Khoảng cách xa</h3>
            <p className={cx('item_description')}>Chúng tôi cung cấp cho bạn dịch vụ taxi đường dài đến bất cứ đâu.</p>
          </li>

          <li className={cx('services_item', 'col l-3 m-3 c-12')}>
            <DirectionsCarIcon className={cx('item_icon')} />
            <h3 className={cx('item_title')}>Chuyến tham quan bằng taxi</h3>
            <p className={cx('item_description')}>Chúng tôi cung cấp các tour du lịch bằng taxi với nhiều thời lượng và độ phức tạp khác nhau.</p>
          </li>
        </ul>
        </div>
        <div className={cx('overlay')}></div>
      </div>
    </div>
  )
}

export default About