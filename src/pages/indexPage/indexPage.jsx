import React, { Component } from 'react';

import Parser from 'html-react-parser';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape, defineMessages } from 'react-intl';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { gamesSelector, fetchGamesAction } from 'controllers/games';

import { FieldProvider } from 'components/fields/fieldProvider';
import { FieldSearch } from 'components/fields/fieldSearch';
import { Input } from 'components/inputs/input';
import { NeonGhostButton } from 'components/buttons/neonGhostButton';
import { SortControl } from 'components/main/sortControl';

import AnimatedLogo from './img/animated-logo-inline.svg';
import CardsIcon from './img/cards-icon.png';
import NewIcon from './img/new-icon.png';
import PopularIcon from './img/popular-icon.png';
import RouletteIcon from './img/roulette-icon.png';
import SlotIcon from './img/slot-icon.png';

import { LastWinners } from './lastWinners';
import { Jackpot } from './jackpot';
import { Promotions } from './promotions';
import { GameBlock } from './gameBlock';

import styles from './indexPage.scss';

const cx = classNames.bind(styles);
const messages = defineMessages({
  searchPlaceholder: {
    id: 'IndexPage.searchPlaceholder',
    defaultMessage: 'Search for game...',
  },
});

@reduxForm({
  form: 'search',
})
@injectIntl
@connect(state => ({
  games: gamesSelector(state),
}), {
  fetchGamesAction,
})
export class IndexPage extends Component {
  static propTypes = {
    showModalAction: PropTypes.func.isRequired,
    fetchGamesAction: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
    games: PropTypes.array,
  };
  static defaultProps = {
    showModalAction: () => {},
    games: [],
  };
  state = {
    sortCriteria: 'abcSort',
  };

  componentWillMount() {
    this.props.fetchGamesAction();
  }
  changeSortHandler = (criteria) => {
    this.setState({ sortCriteria: criteria });
  };
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx('index-page')}>
        <div className={cx('main-banner')}>
          <div className={cx('animated-logo')}>
            { Parser(AnimatedLogo) }
          </div>
        </div>

        <div className={cx('statistics-wrapper')}>
          <div className={cx('separator')} />
          <div className={cx('statistics-block')}>
            <LastWinners />
          </div>
          <div className={cx('statistics-block')}>
            <Jackpot />
          </div>
          <div className={cx('separator')} />
        </div>

        <div className={cx('games-buttons')}>
          <div className={cx('game-button-holder')}>
            <NeonGhostButton icon={PopularIcon} >
              <FormattedMessage id={'indexPage.popularBtn'} defaultMessage={'Popular'} />
            </NeonGhostButton>
          </div>
          <div className={cx('game-button-holder')}>
            <NeonGhostButton icon={NewIcon} >
              <FormattedMessage id={'indexPage.newBtn'} defaultMessage={'New'} />
            </NeonGhostButton>
          </div>
          <div className={cx('game-button-holder')}>
            <NeonGhostButton icon={SlotIcon} >
              <FormattedMessage id={'indexPage.slotBtn'} defaultMessage={'Slot games'} />
            </NeonGhostButton>
          </div>
          <div className={cx('game-button-holder')}>
            <NeonGhostButton icon={CardsIcon} >
              <FormattedMessage id={'indexPage.cardsBtn'} defaultMessage={'Card games'} />
            </NeonGhostButton>
          </div>
          <div className={cx('game-button-holder')}>
            <NeonGhostButton icon={RouletteIcon} >
              <FormattedMessage id={'indexPage.rouletteBtn'} defaultMessage={'Roulette'} />
            </NeonGhostButton>
          </div>
        </div>

        <div className={cx('sort-search-area')}>
          <SortControl
            activeCriteria={this.state.sortCriteria}
            items={['abcSort', 'popularitySort']}
            onChange={this.changeSortHandler}
          />
          <div className={cx('search-wrapper')}>
            <FieldProvider name="search">
              <FieldSearch>
                <Input dark placeholder={formatMessage(messages.searchPlaceholder)} />
              </FieldSearch>
            </FieldProvider>
          </div>
        </div>

        <div className={cx('main-content')}>
          <div className={cx('promotions-block')}>
            <Promotions />
          </div>
          {
            Array.map(this.props.games, (gameData, index) => (
              <div key={index} className={cx('game-block-holder')}>
                <GameBlock data={gameData} />
              </div>
              ))
          }
        </div>
      </div>
    );
  }
}

