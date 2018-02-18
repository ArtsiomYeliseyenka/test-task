import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withReadme } from 'storybook-readme';
import { NeonButton } from './neonButton';
import README from './README.md';

storiesOf('Components/Buttons/bigButton', module)
  .addDecorator(host({
    title: 'Big button component',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#fff',
    height: 50,
    width: 200,
  }))
  .addDecorator(withReadme(README))
  .add('default state', () => (
    <NeonButton />
  ))
  .add('with text', () => (
    <NeonButton>Button title</NeonButton>
  ))
  .add('colored', () => (
    <NeonButton color={'organish'}>Button title</NeonButton>
  ))
  .add('disabled', () => (
    <NeonButton disabled>Button title</NeonButton>
  ))
  .add('with actions', () => (
    <NeonButton onClick={action('clicked')}>Button title</NeonButton>
  ))
  .add('disabled with actions', () => (
    <NeonButton disabled onClick={action('clicked')}>Button title</NeonButton>
  ))
;
