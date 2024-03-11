import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <div className={cx('wrapper', 'grid')}>
      <div className='row'>
        <div className={cx('description', 'col l-3 m-4 c-12')}>
          <img src='./LOGO.png' className={cx('logo')} />
          <p className={cx('content')}>Chúng tôi đã tạo ra taxi của mình để giúp bạn tìm được dịch vụ taxi đáng tin cậy nhất và chất lượng cao nhất, mọi lúc, mọi nơi mà không gặp bất kỳ trở ngại nào.</p>
        </div>

        <div className={cx('useful', 'col l-3 m-4 c-12')}>
          <h3 className={cx('title')}>Liên kết</h3>
          <ul className={cx('links')}>
            <li className={cx('link')}>
              <ArrowRightIcon className={cx('link_icon')} />
              <Link href='/'>Trang chủ</Link>
            </li>

            <li className={cx('link')}>
              <ArrowRightIcon className={cx('link_icon')} />
              <Link href='/about'>Thông tin</Link>
            </li>

            <li className={cx('link')}>
              <ArrowRightIcon className={cx('link_icon')} />
              <Link href='/contact'>Liên hệ</Link>
            </li>
          </ul>
        </div>

        <div className={cx('contact', 'col l-3 m-4 c-12')}>
          <h3 className={cx('title')}>Thông tin liên hệ</h3>
          <ul className={cx('links')}>
            <li className={cx('link')}>
              <EmailIcon className={cx('link_icon')} />
              <p>ductho23pro@gmail.com</p>
            </li>

            <li className={cx('link')}>
              <LocalPhoneIcon className={cx('link_icon')} />
              <p>0566814814</p>
            </li>

            <li className={cx('link')}>
              <LocationOnIcon className={cx('link_icon')} />
              <p>Buôn Ma Thuật - Đăk Lăk</p>
            </li>
          </ul>
        </div>

        <div className={cx('contact', 'col l-3 m-4 c-12')}>
          <h3 className={cx('title')}>Theo dõi chúng tôi</h3>
          <p className={cx('message')}>Đăng kí nhận bản tin</p>
          <div className={cx('input_group')}>
            <input type="text" placeholder='Nhập email!' spellCheck={false} />
            <SendIcon className={cx('input_icon')} />
          </div>
        </div>
      </div>
      <div className={cx('bottom')}>
        <p className={cx('copyright')}>
          Mr.ThoThemes © 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer