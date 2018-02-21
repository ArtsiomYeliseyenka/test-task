import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SliderComponent } from 'components/main/sliderComponent';
import { promotionsSelector, fetchPromotionsAction } from 'controllers/promotions';
import classNames from 'classnames/bind';
import styles from './promotions.scss';


const cx = classNames.bind(styles);

@connect(state => ({
  promotions: promotionsSelector(state),
}), {
  fetchPromotionsAction,
})
export class Promotions extends Component {
  static propTypes = {
    promotions: PropTypes.array,
    fetchPromotionsAction: PropTypes.func.isRequired,
  };
  static defaultProps = {
    promotions: [],
  };
  componentWillMount() {
    this.props.fetchPromotionsAction();
  }
  render() {
    return (
      <div className={cx('promotions')}>
        <div className={cx('label')}>
          <FormattedMessage id={'Promotions.title'} defaultMessage={'Promotions'} />
        </div>
        <div className={cx('carousel-wrapper')}>
          <SliderComponent data={this.props.promotions} />
        </div>
      </div>
    );
  }
}
