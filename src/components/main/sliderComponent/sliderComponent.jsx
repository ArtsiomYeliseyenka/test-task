import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './sliderComponent.scss';

const cx = classNames.bind(styles);

export class SliderComponent extends Component {
  static propTypes = {
    data: PropTypes.array,
  };
  static defaultProps = {
    data: [],
  };
  componentWillMount() {
  }
  render() {
    const sliderConfig = {
      slidesToShow: 1,
      autoplay: true,
      dots: true,
      arrows: false,
    };
    return (
      <div className={cx('slider-component')}>
        <Slider {...sliderConfig}>
          {Array.map(this.props.data, (item, index) => (
            <div key={index} className={cx('promo')}>
              <img className={cx('banner')} src={item.banner} alt="banner" />
              <div className={cx('promo-info')}>
                <div className={cx('promo-title')}>
                  { item.title }
                </div>
                <div className={cx('promo-description')}>
                  { item.description }
                </div>
              </div>
            </div>
            ))}
        </Slider>
      </div>
    );
  }
}
