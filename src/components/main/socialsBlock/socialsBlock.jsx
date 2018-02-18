import classNames from 'classnames/bind';
import styles from './socialsBlock.scss';

const cx = classNames.bind(styles);

export const SocialsBlock = () => (
  <div className={cx('socials-block')}>
    <a href="https://www.facebook.com" className={cx('social-link')}>
      <div className={cx('fb-link', 'social-link-content')} />
    </a>
    <a href="https://twitter.com" className={cx('social-link')}>
      <div className={cx('tw-link', 'social-link-content')} />
    </a>
    <a href="https://vk.com" className={cx('social-link')}>
      <div className={cx('vk-link', 'social-link-content')} />
    </a>
  </div>
);
