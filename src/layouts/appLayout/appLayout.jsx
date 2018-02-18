import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Footer } from 'components/main/footer';
import { Header } from 'components/main/header';
import { ScrollWrapper } from 'components/main/scrollWrapper';
import styles from './appLayout.scss';

const cx = classNames.bind(styles);

export class AppLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {
    children: null,
  };

  state = {

  };
  render() {
    return (
      <ScrollWrapper>
        <div className={cx('app-container')}>
          <div className={cx('header-container')}>
            <Header />
          </div>
          <div className={cx('page-container')}>
            { this.props.children }
          </div>
          <div className={cx('footer-container')}>
            <Footer />
          </div>
        </div>
      </ScrollWrapper>
    );
  }
}
