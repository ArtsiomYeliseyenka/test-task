import { NavLink } from 'react-router-dom';
import { LocalizationSwitcher } from 'components/main/localizationSwitcher';
import { SocialsBlock } from 'components/main/socialsBlock';
import classNames from 'classnames/bind';
import { AuthBlock } from './authBlock';
import styles from './header.scss';


const cx = classNames.bind(styles);

export const Header = () => (
  <div className={cx('header')}>
    <div className={cx('top-block')}>
      <div className={cx('header-menu')}>
        <NavLink to={'/all-games'} className={cx('nav-link')} activeClassName={cx('active')} >
            All Games
        </NavLink>
        <NavLink to={'/refill'} className={cx('nav-link')} activeClassName={cx('active')} >
            Refill
        </NavLink>
        <NavLink to={'/get-a-win'} className={cx('nav-link')} activeClassName={cx('active')} >
            Get a wins
        </NavLink>
        <NavLink to={'/bonuses'} className={cx('nav-link')} activeClassName={cx('active')} >
            Bonuses
        </NavLink>
        <NavLink to={'/mobile-version'} className={cx('nav-link')} activeClassName={cx('active')} >
            Mobile version
        </NavLink>
        <NavLink to={'/contacts'} className={cx('nav-link')} activeClassName={cx('active')} >
            Contacts
        </NavLink>
      </div>

      <div className={cx('top-block-right')}>
        <div className={cx('quick-registration')}>
            Quick registration
        </div>
        <div className={cx('socials-block-container')}>
          <SocialsBlock />
        </div>
        <LocalizationSwitcher />
      </div>
    </div>

    <div className={cx('bottom-block')}>
      <div className={cx('auth-block-container')}>
        <AuthBlock />
      </div>
    </div>
  </div>
  );
