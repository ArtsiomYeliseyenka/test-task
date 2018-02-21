import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { NeonButton } from 'components/buttons/neonButton';
import styles from './gameBlock.scss';

const cx = classNames.bind(styles);

export const GameBlock = ({ data }) => (
  <div className={cx('game-block')}>
    <div className={cx('game-poster')}>
      <img src={data.poster} alt="game-poster" />

      <div className={cx('hover-cover')}>
        <div className={cx('buttons-wrapper')}>
          <div className={cx('play-button')}>
            <NeonButton color={'neon-blue'}>
              <FormattedMessage id={'GameBlock.playNowBtn'} defaultMessage={'Play now'} />
            </NeonButton>
          </div>
          <div className={cx('demo-button')}>
            <NeonButton color={'neon-orange'}>
              <FormattedMessage id={'GameBlock.demoBtn'} defaultMessage={'Demo'} />
            </NeonButton>
          </div>
        </div>
      </div>
    </div>

    <div className={cx('game-title')}>
      { data.name }
    </div>
  </div>
);

GameBlock.propTypes = {
  data: PropTypes.object,
};
GameBlock.defaultProps = {
  data: {},
};
