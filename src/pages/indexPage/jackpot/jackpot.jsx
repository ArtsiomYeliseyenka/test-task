import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { jackpotSelector, fetchJackpotAction } from 'controllers/statistics';
import classNames from 'classnames/bind';
import styles from './jackpot.scss';


const cx = classNames.bind(styles);

@connect(state => ({
  jackpot: jackpotSelector(state),
}), {
  fetchJackpotAction,
})
export class Jackpot extends Component {
  static propTypes = {
    fetchJackpotAction: PropTypes.func.isRequired,
    jackpot: PropTypes.object.isRequired,
  };
  static defaultProps = {
  };
  constructor(props) {
    super(props);
    this.props.fetchJackpotAction();
  }
  render() {
    return (
      <div className={cx('jackpot')}>
        <div className={cx('block-title')}>
          <FormattedMessage id={'Jackpot.title'} defaultMessage={'Jackpot'} />
        </div>
        <div className={cx('jackpot-items')}>
          <div className={cx('jackpot-item', 'gold')}>
            { this.props.jackpot.gold }
          </div>
          <div className={cx('jackpot-item', 'silver')}>
            { this.props.jackpot.silver }
          </div>
          <div className={cx('jackpot-item', 'bronze')}>
            { this.props.jackpot.bronze }
          </div>
        </div>
      </div>
    );
  }
}
