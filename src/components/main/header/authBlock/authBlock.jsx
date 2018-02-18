import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FieldProvider } from 'components/fields/fieldProvider';
import { connect } from 'react-redux';
import { NeonButton } from 'components/buttons/neonButton';
import { Input } from 'components/inputs/input';
import { showModalAction } from 'controllers/modal';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './authBlock.scss';

const cx = classNames.bind(styles);

@connect(null, {
  showModalAction,
})
@reduxForm({
  form: 'authForm',
})
export class AuthBlock extends Component {
  static propTypes = {
    showModalAction: PropTypes.func,
  };
  static defaultProps = {
    showModalAction: () => {},
  };
  render() {
    return (
      <div className={cx('auth-block')}>
        <div className={cx('registration-btn')}>
          <NeonButton color={'neon-blue'} onClick={() => this.props.showModalAction({ modalType: 'registrationModal' })}>
            Registration
          </NeonButton>
        </div>
        <div className={cx('input-wrapper')}>
          <FieldProvider name="login">
            <Input placeholder="Username" />
          </FieldProvider>
        </div>
        <div className={cx('input-wrapper')}>
          <FieldProvider name="password">
            <Input type="password" placeholder="Password" />
          </FieldProvider>
          <span className={cx('forgot-link')}>
          Forgot your password?
          </span>
        </div>
        <div className={cx('login-btn')}>
          <NeonButton color={'neon-orange'}>Login</NeonButton>
        </div>
      </div>
    );
  }
}
