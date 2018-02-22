import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
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
          <FormattedMessage id={'HeaderNav.allGames'} defaultMessage={'All Games'} />
        </NavLink>
        <NavLink to={'/refill'} className={cx('nav-link')} activeClassName={cx('active')} >
          <FormattedMessage id={'HeaderNav.refill'} defaultMessage={'Refill'} />
        </NavLink>
        <NavLink to={'/get-a-win'} className={cx('nav-link')} activeClassName={cx('active')} >
          <FormattedMessage id={'HeaderNav.getWin'} defaultMessage={'Get a wins'} />
        </NavLink>
        <NavLink to={'/bonuses'} className={cx('nav-link')} activeClassName={cx('active')} >
          <FormattedMessage id={'HeaderNav.bonuses'} defaultMessage={'Bonuses'} />
        </NavLink>
        <NavLink to={'/mobile-version'} className={cx('nav-link')} activeClassName={cx('active')} >
          <FormattedMessage id={'HeaderNav.mobileVersion'} defaultMessage={'Mobile version'} />
        </NavLink>
        <NavLink to={'/contacts'} className={cx('nav-link')} activeClassName={cx('active')} >
          <FormattedMessage id={'HeaderNav.contacts'} defaultMessage={'Contacts'} />
        </NavLink>
      </div>
      <div className={cx('top-block-right')}>
        <div className={cx('quick-registration')}>
          <FormattedMessage id={'Header.quickReg'} defaultMessage={'Quick registration'} />
        </div>
        <div className={cx('socials-block-container')}>
          <SocialsBlock />
        </div>
        <LocalizationSwitcher />
      </div>
    </div>
    <div className={cx('bottom-block')}>
      <div className={cx('logo')} />
      <div className={cx('auth-block-container')}>
        <AuthBlock />
      </div>
    </div>
  </div>
  );
