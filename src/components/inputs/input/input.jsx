import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './input.scss';

const cx = classNames.bind(styles);

export const Input = ({ type, value, readonly, dark,
                 placeholder, maxLength, disabled, hasRightIcon,
                 onChange, onFocus, onBlur }) => {
  const classes = cx({
    input: true,
    disabled,
    dark,
    'has-right-icon': hasRightIcon,
  });

  return (
    <input
      type={type}
      className={classes}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readonly}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  dark: PropTypes.bool,
  readonly: PropTypes.bool,
  hasRightIcon: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  maxLength: '254',
  disabled: false,
  dark: false,
  readonly: false,
  hasRightIcon: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};
