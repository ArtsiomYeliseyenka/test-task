import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './neonGhostButton.scss';

const cx = classNames.bind(styles);

export const NeonGhostButton = ({ type, children, icon, onClick }) => (
  <button type={type} className={cx('neon-ghost-button')} onClick={onClick} >
    <div className={cx('icon-holder')}>
      <img src={icon} alt="icon" />
    </div>
    { children }
  </button>
  );

NeonGhostButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

NeonGhostButton.defaultProps = {
  children: '',
  icon: '',
  type: 'button',
  onClick: () => {},
};
