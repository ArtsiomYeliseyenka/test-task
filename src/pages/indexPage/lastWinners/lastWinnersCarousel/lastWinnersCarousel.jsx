import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './lastWinnersCarousel.scss';

const cx = classNames.bind(styles);

export class LastWinnersCarousel extends Component {
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
      slidesToShow: 3,
      autoplay: false,
      dots: false,
      arrows: true,
    };
    return (
      <div className={cx('last-winners-carousel')}>
        <Slider {...sliderConfig}>
          {Array.map(this.props.data, (item, index) => (
            <div key={index} className={cx('winner')}>
              <div className={cx('avatar')}>
                <img src={item.avatar} alt="ava" />
              </div>
              <div className={cx('winner-info')}>
                <div className={cx('game')}>
                  { item.game }
                </div>
                <div className={cx('win-sum')}>
                  { `${item.winSum}$` }
                </div>
                <div className={cx('name')}>
                  { item.name }
                </div>
              </div>
            </div>

            ))}
        </Slider>
      </div>
    );
  }
}
