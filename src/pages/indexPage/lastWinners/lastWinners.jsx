import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { lastWinnersSelector, fetchWinnersAction } from 'controllers/statistics';
import classNames from 'classnames/bind';
import styles from './lastWinners.scss';
import { LastWinnersCarousel } from './lastWinnersCarousel';


const cx = classNames.bind(styles);

@connect(state => ({
  lastWinners: lastWinnersSelector(state),
}), {
  fetchWinnersAction,
})
export class LastWinners extends Component {
  static propTypes = {
    lastWinners: PropTypes.array,
    fetchWinnersAction: PropTypes.func.isRequired,
  };
  static defaultProps = {
    lastWinners: [],
  };
  componentWillMount() {
    this.props.fetchWinnersAction();
  }
  render() {
    return (
      <div className={cx('last-winners')}>
        <div className={cx('block-title')}>
          <FormattedMessage id={'LastWinners.title'} defaultMessage={'Last winners'} />
        </div>
        <div className={cx('carousel-wrapper')}>
          <LastWinnersCarousel data={this.props.lastWinners} />
        </div>
      </div>
    );
  }
}
