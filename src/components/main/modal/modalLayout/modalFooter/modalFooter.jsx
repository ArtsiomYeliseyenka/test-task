import React from 'react';
import PropTypes from 'prop-types';
import { NeonButton } from 'components/buttons/neonButton';
import classNames from 'classnames/bind';
import styles from './modalFooter.scss';

const cx = classNames.bind(styles);

export const ModalFooter = ({
  warningMessage, hasCancel, hasOk, dangerButton, cancelText, okText,
  onClickOk, onClickCancel, customButton,
}) => (
  <div className={cx('modal-footer')}>
    { warningMessage ?
      <div className={cx('warning-block')}>
        <i className={cx('warning-icon')} />
        <span className={cx('warning-message')}>
          { warningMessage }
        </span>
      </div>
      : null
    }
    <div className={cx('buttons-block')}>
      {
        hasCancel ?
          <div className={cx('button-container')}>
            <NeonButton color={'gray-60'} onClick={onClickCancel}>{cancelText}</NeonButton>
          </div>
          : null
      }
      {
        hasOk ?
          <div className={cx('button-container')}>
            <NeonButton color={dangerButton ? 'neon-orange' : 'neon-blue'} onClick={onClickOk}>{okText}</NeonButton>
          </div>
          : null
      }
      {
        customButton ?
          <div className={cx('button-container')}>
            { customButton }
          </div>
          : null
      }
    </div>
  </div>
  );
ModalFooter.propTypes = {
  warningMessage: PropTypes.string,
  hasCancel: PropTypes.bool,
  hasOk: PropTypes.bool,
  dangerButton: PropTypes.bool,
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  onClickOk: PropTypes.func,
  onClickCancel: PropTypes.func,
  customButton: PropTypes.node, // custom buttons
};
ModalFooter.defaultProps = {
  warningMessage: '',
  hasCancel: false,
  hasOk: false,
  dangerButton: false,
  cancelText: 'Cancel',
  okText: 'Save',
  onClickOk: () => {},
  onClickCancel: () => {},
  customButton: null,
};
