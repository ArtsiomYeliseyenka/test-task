import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './payments.scss';


const cx = classNames.bind(styles);

export const Payments = () => (
  <div className={cx('payments')}>
    <div className={cx('separator')} />
    <Link to="http://www.mastercard.com/" className={cx('payment-item', 'mastercard')} />
    <Link to="https://money.yandex.ru/" className={cx('payment-item', 'yandex')} />
    <Link to="https://www.visa.com/globalgateway/" className={cx('payment-item', 'visa')} />
    <Link to="https://www.liqpay.com/" className={cx('payment-item', 'liqpay')} />
    <Link to="https://qiwi.com/" className={cx('payment-item', 'qiwi')} />
    <div className={cx('separator')} />
  </div>
);
