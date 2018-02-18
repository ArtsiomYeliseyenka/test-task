import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withReadme } from 'storybook-readme';
import TestIcon from './img/test-icon-inline.svg';
import { GhostButton } from './ghostButton';
import README from './README.md';

storiesOf('Components/Buttons/ghostButton', module)
  .addDecorator(host({
    title: 'Ghost button component',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#fff',
    height: 50,
    width: 200,
  }))
  .addDecorator(withReadme(README))
  .add('default state', () => (
    <GhostButton />
  ))
  .add('with text', () => (
    <GhostButton>Button title</GhostButton>
  ))
  .add('with icon', () => (
    <GhostButton icon={TestIcon} />
  ))
  .add('with icon & text', () => (
    <GhostButton icon={TestIcon}>Button title</GhostButton>
  ))
  .add('disabled with text', () => (
    <GhostButton disabled>Button title</GhostButton>
  ))
  .add('disabled with icon', () => (
    <GhostButton icon={TestIcon} disabled />
  ))
  .add('disabled with icon & text', () => (
    <GhostButton icon={TestIcon} disabled>Button title</GhostButton>
  ))
  .add('with actions', () => (
    <GhostButton onClick={action('clicked')}>Button title</GhostButton>
  ))
  .add('disabled with actions', () => (
    <GhostButton disabled onClick={action('clicked')}>Button title</GhostButton>
  ))
;
