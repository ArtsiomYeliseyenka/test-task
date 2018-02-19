import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { lastWinnersSelector, fetchWinnersAction } from 'controllers/statistics';
import classNames from 'classnames/bind';
import styles from './lastWinners.scss';


const cx = classNames.bind(styles);

@connect(state => ({
  lastWinners: lastWinnersSelector(state),
}), {
  fetchWinnersAction,
})
export class LastWinners extends Component {
  static propTypes = {
    fetchWinnersAction: PropTypes.func.isRequired,
  };
  static defaultProps = {
  };
  componentWillMount() {
    // this.props.fetchWinnersAction();
  }
  render() {
    return (
      <div className={cx('last-winners')}>
        123
      </div>
    );
  }
}
