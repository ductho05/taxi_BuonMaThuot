import React from 'react'
import classNames from 'classnames/bind'
import styles from './CallButton.module.scss'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Link from 'next/link';

const cx = classNames.bind(styles)

const CallButton = () => {
  return (
    <div className={cx('wrapper')}>
      <Link href='tel:0939492779'>
        <PermPhoneMsgIcon className={cx('icon')} />
      </Link>
    </div>
  )
}

export default CallButton