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
            <div className={cx('jackpot-coin')} />
            { this.props.jackpot.gold.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
          </div>
          <div className={cx('jackpot-item', 'silver')}>
            <div className={cx('jackpot-coin')} />
            { this.props.jackpot.silver.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
          </div>
          <div className={cx('jackpot-item', 'bronze')}>
            <div className={cx('jackpot-coin')} />
            { this.props.jackpot.bronze.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
          </div>
        </div>
      </div>
    );
  }
}
