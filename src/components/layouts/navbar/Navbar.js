"use client"
import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';

const cx = classNames.bind(styles)

const links = [
    {
        id: 0,
        title: 'Trang chủ',
        url: '/'
    },
    {
        id: 1,
        title: 'Thông tin',
        url: '/about'
    },
    {
        id: 0,
        title: 'Liên hệ',
        url: '/contact'
    },
]

const Navbar = () => {

    const [currentPage, setCurrentPage] = useState(0)
    const [isSticky, setIsSticky] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const header = useRef()

    const handeClickPage = (index) => {
        setCurrentPage(index)
        setOpenMenu(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const scrollTop = window.scrollY
        scrollTop > 0 ? setIsSticky(true) : setIsSticky(false)
    }

    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <Link href='tel:0939492779' className={cx('phone')}>
                    <LocalPhoneIcon className={cx('phone_icon')} />
                    0939492779
                </Link>
            </div>
            <div ref={header} className={isSticky ? cx('bottom', 'sticky') : cx('bottom')}>
                <img src='/LOGO.png' className={cx('logo')} />
                <p className={cx('btn_menu', 'hide-on-pc')}>
                    <MenuOutlinedIcon onClick={handleOpenMenu} className={cx('btn_icon')} />
                </p>
                <div className={cx('links', 'hide-on-mobile-pc')}>
                    {
                        links.map((link, index) => (
                            <Link
                                onClick={() => handeClickPage(index)}
                                key={link.id}
                                href={link.url}
                                className={index == currentPage ? cx('link', 'active') : cx('link')}
                            >
                                {link.title}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className={openMenu ? cx('menu_on_mobile_tablet', 'visiable') : cx('menu_on_mobile_tablet')}>
                <img src='/LOGO.png' className={cx('logo')} />
                <CloseOutlinedIcon onClick={handleCloseMenu} className={cx('btn_close')} />
                <ul className={cx('links')}>
                    {
                        links.map((link, index) => (
                            <li key={index} className={index == currentPage ? cx('link', 'active') : cx('link')}>
                                <Link
                                    onClick={() => handeClickPage(index)}
                                    key={link.id}
                                    href={link.url}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar