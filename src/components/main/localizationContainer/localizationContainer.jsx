import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { langSelector } from 'controllers/lang';

import localeRU from '../../../../localization/translated/ru.json';

addLocaleData([...en, ...ru]);

@connect(state => ({
  lang: langSelector(state),
}))
export class LocalizationContainer extends React.Component {
  static propTypes = {
    lang: PropTypes.string,
    children: PropTypes.node,
  };
  static defaultProps = {
    lang: 'ru',
    children: null,
  };
  constructor(props) {
    super(props);
    this.messages = {
      ru: localeRU,
    };
    if (!window.Intl) {
      this.state = { ready: false };
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js',
        'intl/locale-data/jsonp/ru.js',
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        require('intl/locale-data/jsonp/ru.js');
        this.setState({ ready: true });
      });
    } else {
      this.state = { ready: true };
    }
  }

  render() {
    if (!this.state.ready) {
      return <div />;
    }
    return (
      <IntlProvider locale={this.props.lang} messages={this.messages[this.props.lang]}>
        {React.cloneElement(this.props.children, { key: this.props.lang })}
      </IntlProvider>
    );
  }
}
