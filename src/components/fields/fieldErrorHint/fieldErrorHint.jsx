import { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import styles from './fieldErrorHint.scss';

const cx = classNames.bind(styles);

const messages = defineMessages({
  nameHint: { id: 'RegistrationForm.nameHint', defaultMessage: 'This field can\'t be blank' },
  passwordHint: { id: 'RegistrationForm.passwordHint', defaultMessage: 'From \'6\' to \'16\' symbols' },
  emailHint: { id: 'RegistrationForm.email', defaultMessage: 'Email is invalid' },
  confirmPasswordHint: { id: 'RegistrationForm.confirmPasswordHint', defaultMessage: 'Passwords not equal' },
  ipHint: { id: 'RegistrationForm.ipHint', defaultMessage: 'IP address is invalid' },
});

@injectIntl
export class FieldErrorHint extends PureComponent {
  static propTypes = {
    hintType: PropTypes.string,
    children: PropTypes.node,
    intl: intlShape.isRequired,
    error: PropTypes.string,
    active: PropTypes.bool,
    touched: PropTypes.bool,
  };
  static defaultProps = {
    hintType: 'bottom',
    children: null,
    error: '',
    active: false,
    touched: false,
  };
  render() {
    const { hintType, children, intl, error, active, touched, ...rest } = this.props;
    const classes = cx({
      'field-error-hint': true,
      show: error && (active || touched),
      'bottom-type': hintType === 'bottom',
    });

    return (
      <div className={classes}>
        {children && cloneElement(children, { error, active, ...rest })}
        <div className={cx('hint')}>
          <div className={cx('hint-content')}>
            <i>!</i>{error && messages[error] ? intl.formatMessage(messages[error]) : error}
          </div>
        </div>
      </div>
    );
  }
}
