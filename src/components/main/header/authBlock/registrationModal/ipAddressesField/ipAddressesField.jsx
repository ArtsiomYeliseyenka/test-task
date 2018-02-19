import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
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
  validate: ({ ip }, props) => ({
    ip: (!props.isAddresses && (!ip || !validate.ip(ip))) && 'ipHint',
  }),
})
export class IpAddressesField extends Component {
  static propTypes = {
    ipAddresses: PropTypes.array,
    submitForm: PropTypes.func,
    reset: PropTypes.func,
    valid: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    touch: PropTypes.func.isRequired,
    onIpListChange: PropTypes.func,
    onRef: PropTypes.func,
  };
  static defaultProps = {
    ipAddresses: [],
    valid: false,
    submitForm: () => {},
    reset: () => {},
    touch: () => {},
    onIpListChange: () => {},
    onRef: () => {},
  };
  state = {
    currentValue: '',
  };
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }
  highlight() {
    this.props.touch('ip');
  }
  changeHandler = (e) => {
    this.setState({ currentValue: e.target.value });
  };
  addIpClick = () => {
    this.props.touch('ip');
    this.props.valid && this.addItem();
  };
  addItem = () => {
    const items = this.props.ipAddresses;
    const value = this.state.currentValue;
    if (value && items.length < 5 && items.indexOf(value) === -1) {
      items.push(value);
      this.setState({ value: '' });
      this.props.reset();
      this.props.onIpListChange(items);
    }
  };
  removeItem = (e) => {
    const items = this.props.ipAddresses;
    items.splice(e.currentTarget.dataset.index, 1);
    this.setState({ items });
    this.props.onIpListChange(items);
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
          <span className={cx('text')}>
            <FormattedMessage id={'regModal.addIp'} defaultMessage={'Add IP'} />
          </span>
        </div>
        <div className={cx('ip-list')}>
          { Array.map(this.props.ipAddresses, (item, index) => (
            <div key={index} className={cx('ip-item')}>
              { item }
              <span className={cx('remove')} onClick={this.removeItem} data-index={index}>
                <FormattedMessage id={'regModal.removeIp'} defaultMessage={'Remove'} />
              </span>
            </div>
            )) }
        </div>
      </div>
    );
  }
}
