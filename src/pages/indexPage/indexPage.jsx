import React, { Component } from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './indexPage.scss';
import AnimatedLogo from './img/animated-logo-inline.svg';
import { LastWinners } from './lastWinners';
import { Jackpot } from './jackpot';

const cx = classNames.bind(styles);

export class IndexPage extends Component {
  static propTypes = {
    showModalAction: PropTypes.func.isRequired,
  };
  static defaultProps = {
    showModalAction: () => {},
  };
  render() {
    return (
      <div className={cx('index-page')}>
        <div className={cx('main-banner')}>
          <div className={cx('animated-logo')}>
            { Parser(AnimatedLogo) }
          </div>
        </div>
        <div className={cx('statistics-wrapper')}>
          <div className={cx('separator')} />
          <div className={cx('statistics-block')}>
            <LastWinners />

          </div>
          <div className={cx('statistics-block')}>
            <Jackpot />
          </div>
          <div className={cx('separator')} />
        </div>
      </div>
    );
  }
}

