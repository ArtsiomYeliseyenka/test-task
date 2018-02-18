import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FieldErrorHint } from 'components/fields/fieldErrorHint';
import { FieldProvider } from 'components/fields/fieldProvider';
import { Input } from 'components/inputs/input';
import { validate } from 'common/utils';
import PropTypes from 'prop-types';
import { hideModalAction } from 'controllers/modal';
import { connect } from 'react-redux';
import { withModal, ModalLayout } from 'components/main/modal';
import classNames from 'classnames/bind';
import { IpAddressesField } from './ipAddressesField';
import styles from './registrationModal.scss';

const cx = classNames.bind(styles);

@connect(null, {
  hideModalAction,
})
@withModal('registrationModal')
@reduxForm({
  form: 'RegistrationForm',
  validate: ({ name, email, password, confirmPassword }) => ({
    name: (!name || !validate.name(name)) && 'nameHint',
    email: (!email || !validate.email(email)) && 'emailHint',
    password: (!password || !validate.password(password)) && 'passwordHint',
    confirmPassword: (!confirmPassword || confirmPassword !== password) && 'confirmPasswordHint',
  }),
})
export class RegistrationModal extends Component {
  static propTypes = {
    submitForm: PropTypes.func,
    valid: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    hideModalAction: PropTypes.func.isRequired,
  };
  static defaultProps = {
    valid: false,
    hideModalAction: () => {},
    submitForm: () => {},
  };
  handleSubmit = () => {
    this.submit.click();
    return this.props.valid;
  };
  validateIpField = () => {

  };
  render() {
    return (
      <ModalLayout title={'registration'} hasOk okText="Submit" validateContent={this.handleSubmit}>
        <div className={cx('content-wrapper')}>
          <div className={cx('tip-message')}>
            Indicates required fields
          </div>
          <form className={cx('registration-form')} onSubmit={this.props.handleSubmit(this.props.submitForm)}>
            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                Name
              </div>
              <div className={cx('field')}>
                <FieldProvider name="name">
                  <FieldErrorHint>
                    <Input dark placeholder="name" />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                E-mail
              </div>
              <div className={cx('field')}>
                <FieldProvider name="email">
                  <FieldErrorHint>
                    <Input dark placeholder="email" />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                IP addresses
              </div>
              <div className={cx('ip-field')}>
                <IpAddressesField />
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                Password
              </div>
              <div className={cx('field')}>
                <FieldProvider name="password">
                  <FieldErrorHint>
                    <Input maxLength="16" dark placeholder="name" />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                Confirm password
              </div>
              <div className={cx('field')}>
                <FieldProvider name="confirmPassword">
                  <FieldErrorHint>
                    <Input maxLength="16" dark placeholder="confirm password" />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>
            <button ref={(submit) => { this.submit = submit; }} className={cx('hidden')} type="submit" />
          </form>
        </div>
      </ModalLayout>
    );
  }
}
