'use client';
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './page.module.scss';
import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DoNotDisturbOnTotalSilenceOutlinedIcon from '@mui/icons-material/DoNotDisturbOnTotalSilenceOutlined';
import FindReplaceOutlinedIcon from '@mui/icons-material/FindReplaceOutlined';
import Link from 'next/link';

const slides = [
    {
        id: 0,
        url: 'https://images.pexels.com/photos/3760814/pexels-photo-3760814.jpeg',
        text: 'Tận hưởng chuyến đi thoải mái',
        title: 'Đặt taxi online',
    },
    {
        id: 1,
        url: 'https://images.pexels.com/photos/5225461/pexels-photo-5225461.jpeg',
        text: 'Bạn sẽ có chuyến đi an toàn',
        title: 'Dịch vụ taxi tốt nhất',
    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/6008633/pexels-photo-6008633.jpeg',
        text: 'Nhanh chóng, tiện lợi, an toàn',
        title: 'Tìm taxi của bạn',
    },
];

const cx = classNames.bind(styles);

export default function Home() {
    const [slide, setSlide] = useState(slides[0]);
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [dateTimeStart, setDateTimeStart] = useState('Chọn ngày giờ');
    const [phone, setPhone] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsEnd, setSuggestionsEnd] = useState([]);
    const [error, setError] = useState(false);
    const dateTime = useRef();
    const timeouts = useRef(null);

    const geocodingClient = MapboxGeocoding({
        accessToken: 'pk.eyJ1IjoiZHVjdGhvMjMwNSIsImEiOiJjbGxqYjQwbnoxMW1oM2RyNnExcDVhYWt1In0.c6rvxjhaoHST20hqxxjpkQ',
    });

    const resetTimeout = () => {
        if (timeouts.current) {
            clearTimeout(timeouts.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeouts.current = setTimeout(() => {
            setSlide((prev) => {
                return prev.id >= slides.length - 1 ? slides[0] : slides[prev.id + 1];
            });
        }, 18000);

        return () => {
            resetTimeout();
        };
    }, [slide]);

    const handleClickSlide = (id) => {
        setSlide(slides[id]);
    };

    // const handleShowDateTime = () => {
    //     dateTime.current.showPicker()
    // }

    // const handleChangeValue = async (e) => {
    //     if (e.target.value == '' || e.target.value == null) {
    //         setSuggestions([])
    //     }
    //     setStartLocation(e.target.value)
    //     try {
    //         const response = await geocodingClient.forwardGeocode({
    //             query: startLocation,
    //             countries: ['VN'],
    //             limit: 5,
    //         }).send();

    //         const results = response.body;
    //         setSuggestions(results.features);
    //     } catch (error) {
    //         console.log('Error:', error.message);
    //     }
    // }

    // const handleOnclickSuggest = (value) => {
    //     setStartLocation(value)
    //     setSuggestions([])
    // }

    // const handleOnclickSuggestEnd = (value) => {
    //     setEndLocation(value)
    //     setSuggestionsEnd([])
    // }

    // const handleChangeEndLocation = async (e) => {
    //     setEndLocation(e.target.value)
    //     try {
    //         const response = await geocodingClient.forwardGeocode({
    //             query: endLocation,
    //             countries: ['VN'],
    //             limit: 5,
    //         }).send();

    //         const results = response.body;
    //         setSuggestionsEnd(results.features);
    //     } catch (error) {
    //         console.log('Error:', error.message);
    //     }
    // }

    // const handleChangePhone = (e) => {
    //     setPhone(e.target.value)
    // }

    // const handeleChangeTime = (e) => {
    //     setDateTimeStart(() => e.target.value ? e.target.value : 'Chọn ngày giờ')
    // }

    useEffect(() => {
        if (startLocation != '' && endLocation != '' && dateTimeStart != 'Chọn ngày giờ' && phone != '') {
            setError(true);
        } else {
            setError(false);
        }
    }, [startLocation, endLocation, dateTimeStart, phone]);

    return (
        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
            <div className={cx('wrapper')}>
                <div className={cx('slides')}>
                    <div className={cx('caption')}>
                        <p className={cx('text')}>{slide.text}</p>
                        <p className={cx('title')}>{slide.title}</p>
                    </div>
                    <img src={slide.url} alt={`Slide ${slide.id}`} />
                    <div className={cx('overlay')}></div>
                    <ul className={cx('dots')}>
                        {slides.map((item) => (
                            <li
                                onClick={() => handleClickSlide(item.id)}
                                key={item.id}
                                className={slide.id == item.id ? cx('dot', 'active') : cx('dot')}
                            ></li>
                        ))}
                    </ul>
                    <div className={cx('order', 'hide_on_mobile_tablet')}>
                        {/* <div className={cx('inputs')}>
                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeValue(e)}
                                    value={startLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đón"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestions.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggest(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeEndLocation(e)}
                                    value={endLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đến"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestionsEnd.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggestEnd(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input', 'input_date_time')}>
                                <AccessTimeIcon className={cx('input_icon')} />
                                <label onClick={handleShowDateTime} for='date-time'>{dateTimeStart}</label>
                                <input onChange={(e) => handeleChangeTime(e)} value={dateTimeStart} ref={dateTime} type="datetime-local" id='date-time' />
                            </div>

                            <div className={cx('order_input')}>
                                <LocalPhoneIcon className={cx('input_icon')} />
                                <input value={phone} onChange={(e) => handleChangePhone(e)} type="text" className={cx('input')} placeholder="Số điện thoại" />
                            </div>
                        </div> */}
                        <Link href="tel:0566814814" className={cx('btn_order')}>
                            Gọi ngay cho chúng tôi!
                        </Link>
                    </div>
                </div>
                <div className={cx('order_on_mobile_tablet', 'hide_on_pc')}>
                    <div className={cx('order')}>
                        {/* <div className={cx('inputs')}>
                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeValue(e)}
                                    value={startLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đón"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestions.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggest(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeEndLocation(e)}
                                    value={endLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đến"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestionsEnd.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggestEnd(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input', 'input_date_time')}>
                                <AccessTimeIcon className={cx('input_icon')} />
                                <label onClick={handleShowDateTime} for='date-time'>{dateTimeStart}</label>
                                <input onChange={(e) => handeleChangeTime(e)} value={dateTimeStart} ref={dateTime} type="datetime-local" id='date-time' />
                            </div>

                            <div className={cx('order_input')}>
                                <LocalPhoneIcon className={cx('input_icon')} />
                                <input value={phone} onChange={(e) => handleChangePhone(e)} type="text" className={cx('input')} placeholder="Số điện thoại" />
                            </div>
                        </div> */}

                        <Link href="tel:0566814814" className={cx('btn_order')}>
                            Gọi ngay cho chúng tôi!
                        </Link>
                    </div>
                </div>
                <div className={cx('features')}>
                    <h3 className={cx('main_features')}>Tính năng chính</h3>
                    <h4 className={cx('main_title')}>Tiện ích chúng tôi đem lại</h4>
                    <div className={cx('feature_list')}>
                        <div className={cx('left')}>
                            <div className={cx('feature_item')}>
                                <div className={cx('icon')}>
                                    <LocalOfferOutlinedIcon className={cx('icon_img')} />
                                </div>
                                <div className={cx('feature_content')}>
                                    <p className={cx('feature_title')}>Giá xe cố định</p>
                                    <p className={cx('feature_description')}>
                                        Giá vé cố định được đặt trong mỗi đồng hồ tính tiền là biểu giá chính.
                                    </p>
                                </div>
                            </div>

                            <div className={cx('feature_item')}>
                                <div className={cx('icon')}>
                                    <DoNotDisturbOnTotalSilenceOutlinedIcon className={cx('icon_img')} />
                                </div>
                                <div className={cx('feature_content')}>
                                    <p className={cx('feature_title')}>Không phí phát sinh</p>
                                    <p className={cx('feature_description')}>
                                        Chúng tôi bảo đảm không phát sinh thêm bất kì chi phí nào
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('background_car')}>
                            <img src="./car.jpg" alt="car" />
                        </div>

                        <div className={cx('right')}>
                            <div className={cx('feature_item')}>
                                <div className={cx('icon')}>
                                    <ThumbUpOutlinedIcon className={cx('icon_img')} />
                                </div>
                                <div className={cx('feature_content')}>
                                    <p className={cx('feature_title')}>100% hài lòng</p>
                                    <p className={cx('feature_description')}>
                                        Chúng tôi được rất nhiều khách hàng đánh giá cao.
                                    </p>
                                </div>
                            </div>

                            <div className={cx('feature_item')}>
                                <div className={cx('icon')}>
                                    <FindReplaceOutlinedIcon className={cx('icon_img')} />
                                </div>
                                <div className={cx('feature_content')}>
                                    <p className={cx('feature_title')}>Tuyến trong và ngoài tỉnh</p>
                                    <p className={cx('feature_description')}>
                                        Ứng dụng của chúng tôi rất rễ để đặt một chiếc Taxi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    );
}
