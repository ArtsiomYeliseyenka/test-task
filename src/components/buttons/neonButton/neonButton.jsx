import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './neonButton.scss';

const cx = classNames.bind(styles);

export const NeonButton = ({ type, children, disabled, color, onClick }) => {
  const classes = cx({
    'neon-button': true,
    disabled,
    [`color-${color}`]: color,
  });

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick} >
      { children }
    </button>
  );
};

NeonButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

NeonButton.defaultProps = {
  children: '',
  disabled: false,
  color: 'neon-blue',
  type: 'button',
  onClick: () => {},
};
