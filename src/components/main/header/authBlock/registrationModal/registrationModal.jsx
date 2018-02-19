import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FormattedMessage, injectIntl, intlShape, defineMessages } from 'react-intl';
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
const messages = defineMessages({
  modalHeader: {
    id: 'regModal.modalHeader',
    defaultMessage: 'Registration',
  },
  namePlaceholder: {
    id: 'regModal.namePlaceholder',
    defaultMessage: 'Name',
  },
  emailPlaceholder: {
    id: 'regModal.emailPlaceholder',
    defaultMessage: 'email',
  },
  ipAddressesPlaceholder: {
    id: 'regModal.ipAddressesPlaceholder',
    defaultMessage: 'ip addresses',
  },
  passwordPlaceholder: {
    id: 'regModal.passwordPlaceholder',
    defaultMessage: 'password',
  },
  confirmPasswordPlaceholder: {
    id: 'regModal.confirmPasswordPlaceholder',
    defaultMessage: 'confirm password',
  },
  submitButton: {
    id: 'regModal.submitButton',
    defaultMessage: 'Submit',
  },
});

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
@injectIntl
export class RegistrationModal extends Component {
  static propTypes = {
    submitForm: PropTypes.func,
    valid: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    hideModalAction: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
  };
  static defaultProps = {
    valid: false,
    hideModalAction: () => {},
    submitForm: () => {},
  };
  state = {
    hasIpAddresses: false,
  };
  handleSubmit = () => {
    this.submit.click();
    !this.state.hasIpAddresses && this.ipAddressesField.highlight();
    return this.props.valid && this.state.hasIpAddresses;
  };
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <ModalLayout
        title={formatMessage(messages.modalHeader)}
        hasOk
        okText={formatMessage(messages.submitButton)}
        validateContent={this.handleSubmit}
      >
        <div className={cx('content-wrapper')}>
          <div className={cx('tip-message')}>
            <FormattedMessage id={'regModal.tip'} defaultMessage={'Indicates required fields'} />
          </div>
          <form className={cx('registration-form')} onSubmit={this.props.handleSubmit(this.props.submitForm)}>
            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                <FormattedMessage id={'regModal.name'} defaultMessage={'Name'} />
              </div>
              <div className={cx('field')}>
                <FieldProvider name="name">
                  <FieldErrorHint>
                    <Input dark placeholder={formatMessage(messages.namePlaceholder)} />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                <FormattedMessage id={'regModal.email'} defaultMessage={'E-mail'} />
              </div>
              <div className={cx('field')}>
                <FieldProvider name="email">
                  <FieldErrorHint>
                    <Input dark placeholder={formatMessage(messages.emailPlaceholder)} />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                <FormattedMessage id={'regModal.ipAddresses'} defaultMessage={'IP addresses'} />
              </div>
              <div className={cx('ip-field')}>
                <IpAddressesField
                  onRef={(ipAddressesField) => { this.ipAddressesField = ipAddressesField; }}
                  onIpListChange={(ipItems) => {
                    this.setState({ hasIpAddresses: !!ipItems.length });
                  }}
                />
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                <FormattedMessage id={'regModal.password'} defaultMessage={'Password'} />
              </div>
              <div className={cx('field')}>
                <FieldProvider name="password">
                  <FieldErrorHint>
                    <Input maxLength="16" dark placeholder={formatMessage(messages.passwordPlaceholder)} />
                  </FieldErrorHint>
                </FieldProvider>
              </div>
            </div>

            <div className={cx('field-wrapper')}>
              <div className={cx('field-label')}>
                <FormattedMessage id={'regModal.confirmPass'} defaultMessage={'Confirm password'} />
              </div>
              <div className={cx('field')}>
                <FieldProvider name="confirmPassword">
                  <FieldErrorHint>
                    <Input maxLength="16" dark placeholder={formatMessage(messages.confirmPasswordPlaceholder)} />
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
