import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ghostButton.scss';

const cx = classNames.bind(styles);

export const GhostButton = ({ type, children, disabled, color, icon, onClick }) => {
  const classes = cx({
    'ghost-button': true,
    disabled,
    [`color-${color}`]: color,
    'with-icon': icon,
  });
  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick} >
      { icon ? <i className={cx({ icon: true, 'only-icon': !children })} dangerouslySetInnerHTML={{ __html: icon }} /> : null }
      { children }
    </button>
  );
};

GhostButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

GhostButton.defaultProps = {
  children: null,
  disabled: false,
  color: 'topaz',
  icon: '',
  type: 'button',
  onClick: () => {},
};
