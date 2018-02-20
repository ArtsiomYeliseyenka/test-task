import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape, defineMessages } from 'react-intl';
import styles from './sortControl.scss';


const cx = classNames.bind(styles);
const messages = defineMessages({
  abcSort: {
    id: 'IndexPage.abcSort',
    defaultMessage: 'a-z',
  },
  popularitySort: {
    id: 'IndexPage.popularitySort',
    defaultMessage: 'popularity',
  },
});

@injectIntl
export class SortControl extends Component {
  static propTypes = {
    items: PropTypes.array,
    activeCriteria: PropTypes.string,
    onChange: PropTypes.func,
    intl: intlShape.isRequired,
  };
  static defaultProps = {
    items: [],
    activeCriteria: 'abcSort',
    onChange: () => {},
  };
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx('sort-control')}>
        <div className={cx('label')}>
          <FormattedMessage id={'SortControl.sortBy'} defaultMessage={'sort by:'} />
        </div>
        {
          Array.map(this.props.items, (criteria, index) => (
            <div
              key={index}
              className={cx({ 'sort-criteria': true, active: criteria === this.props.activeCriteria })}
              onClick={() => { this.props.onChange(criteria); }}
            >
              { formatMessage(messages[criteria]) }
            </div>
            ))
        }
      </div>
    );
  }
}
