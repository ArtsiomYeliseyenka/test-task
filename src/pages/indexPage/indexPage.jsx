import React, { Component } from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import { NeonGhostButton } from 'components/buttons/neonGhostButton';
import { SortControl } from 'components/main/sortControl';
import styles from './indexPage.scss';
import AnimatedLogo from './img/animated-logo-inline.svg';
import CardsIcon from './img/cards-icon.png';
import NewIcon from './img/new-icon.png';
import PopularIcon from './img/popular-icon.png';
import RouletteIcon from './img/roulette-icon.png';
import SlotIcon from './img/slot-icon.png';
import { LastWinners } from './lastWinners';
import { Jackpot } from './jackpot';

const cx = classNames.bind(styles);

export class IndexPage extends Component {
  static propTypes = {
    showModalAction: PropTypes.func.isRequired,
  };
  static defaultProps = {
    showModalAction: () => {},
  };
  state = {
    sortCriteria: 'abcSort',
  };
  changeSortHandler = (criteria) => {
    this.setState({ sortCriteria: criteria });
  };
  render() {
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
        </div>

      </div>
    );
  }
}

