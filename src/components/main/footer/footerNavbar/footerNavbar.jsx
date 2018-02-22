import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './footerNavbar.scss';

const cx = classNames.bind(styles);

export const FooterNavbar = () => (
  <div className={cx('footer-navbar')}>
    <NavLink to={'/about'} className={cx('footer-nav-link')} >
      <FormattedMessage id={'FooterNavbar.about'} defaultMessage={'About casino'} />
    </NavLink>
    <NavLink to={'/terms'} className={cx('footer-nav-link')} >
      <FormattedMessage id={'FooterNavbar.terms'} defaultMessage={'Terms and conditions'} />
    </NavLink>
    <NavLink to={'/responsible-gaming'} className={cx('footer-nav-link')} >
      <FormattedMessage id={'FooterNavbar.responsible-gaming'} defaultMessage={'Responsible gaming'} />
    </NavLink>
    <NavLink to={'/contacts'} className={cx('footer-nav-link')} >
      <FormattedMessage id={'FooterNavbar.contacts'} defaultMessage={'Contact us'} />
    </NavLink>
  </div>
);
