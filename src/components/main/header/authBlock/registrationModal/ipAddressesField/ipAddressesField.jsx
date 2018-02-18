import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FieldErrorHint } from 'components/fields/fieldErrorHint';
import { FieldProvider } from 'components/fields/fieldProvider';
import { Input } from 'components/inputs/input';
import { validate } from 'common/utils';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ipAddressesField.scss';

const cx = classNames.bind(styles);

@reduxForm({
  form: 'IpAddresses',
  validate: ({ ip }) => ({
    ip: (!ip || !validate.ip(ip)) && 'ipHint',
  }),
})
export class IpAddressesField extends Component {
  static propTypes = {
    submitForm: PropTypes.func,
    valid: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
  };
  static defaultProps = {
    valid: false,
    submitForm: () => {},
  };
  state = {
    currentValue: '',
    items: [],
  };
  changeHandler = (e) => {
    this.setState({ currentValue: e.target.value });
  };
  addIpClick = () => {
    this.props.valid && this.addItem();
  };
  addItem = () => {
    const items = this.state.items;
    console.log(items);
    items.push(this.state.currentValue);
    this.setState({ items });
  };
  render() {
    return (
      <div className={cx('ip-addresses-field')}>
        <div className={cx('field')}>
          <FieldProvider name="ip" onChange={this.changeHandler}>
            <FieldErrorHint>
              <Input dark placeholder="ip address" />
            </FieldErrorHint>
          </FieldProvider>
        </div>
        <div className={cx('add-button')} onClick={this.addIpClick}>
          <i className={cx('icon')}>+</i>
          <span className={cx('text')}>add IP</span>
        </div>
        <div className={cx('ip-list')}>
          { Array.map(this.state.items, (item, index) => (
            <div key={index} className={cx('ip-item')}>
              { item }
            </div>
            )) }
        </div>
      </div>
    );
  }
}
