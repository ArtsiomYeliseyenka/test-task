import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { langSelector, setLangAction } from 'controllers/lang';
import styles from './localizationSwitcher.scss';

const cx = classNames.bind(styles);
const getLanguageLabel = (lang) => {
  switch (lang) {
    case 'ru':
      return 'Русский';
    default:
      return 'English';
  }
};
@connect(state => ({
  lang: langSelector(state),
}), {
  setLangAction,
})
export class LocalizationSwitcher extends PureComponent {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    setLangAction: PropTypes.func.isRequired,
  };
  state = {
    opened: false,
  };
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }
  toggleMenu = () => {
    this.setState({ opened: !this.state.opened });
  };
  handleOutsideClick = (e) => {
    this.state.opened
    && !this.node.contains(e.target)
    && this.toggleMenu();
  };
  render() {
    return (
      <div className={cx('localization-switcher')} onClick={this.toggleMenu}>
        <div ref={(node) => { this.node = node; }} className={cx('current-lang-block')}>
          <div className={cx({ flag: true, ru: this.props.lang === 'ru', en: this.props.lang === 'en' })} />
          <div className={cx('lang')}>
            { getLanguageLabel(this.props.lang) }
          </div>
          <i className={cx('arrow')} />
        </div>
        <ul className={cx({ list: true, shown: this.state.opened })}>
          <LocalizationSwitcherItem lang={this.props.lang} currentLang="en" setLang={this.props.setLangAction} />
          <LocalizationSwitcherItem lang={this.props.lang} currentLang="ru" setLang={this.props.setLangAction} />
        </ul>
      </div>
    );
  }
}

const LocalizationSwitcherItem = ({ lang, currentLang, setLang }) => (
  <li  // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
    className={cx({
      active: lang === currentLang,
      item: true,
    })}
    onClick={() => { setLang(currentLang); }}
  >{getLanguageLabel(currentLang)}</li>
);
LocalizationSwitcherItem.propTypes = {
  lang: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
};
