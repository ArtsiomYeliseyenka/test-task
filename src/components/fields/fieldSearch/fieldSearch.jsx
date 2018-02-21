import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './fieldSearch.scss';

const cx = classNames.bind(styles);

export const FieldSearch = ({ children, ...rest }) => (
  <div className={cx('field-search')}>
    <div className={cx('field-icon')} />
    <div className={cx('container')}>
      {children && cloneElement(children, rest)}
    </div>
  </div>
  );

FieldSearch.propTypes = {
  formField: PropTypes.object,
  children: PropTypes.node,
};
FieldSearch.defaultProps = {
  formField: {},
  children: null,
};
