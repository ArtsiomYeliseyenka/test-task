import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { FooterNavbar } from './footerNavbar';
import { Payments } from './payments';
import styles from './footer.scss';

const cx = classNames.bind(styles);

export const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('footer-content')}>
      <FooterNavbar />
      <Payments />
      <div className={cx('copyright')}>
        <FormattedMessage id={'Footer.copyright'} defaultMessage={'© 2018 . All rights reserved.'} />
      </div>
    </div>
  </div>
);
