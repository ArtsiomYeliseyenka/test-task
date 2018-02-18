import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { FieldErrorHint } from './fieldErrorHint';

storiesOf('Components/Fields/InputErrorHint', module)
  .addDecorator(host({
    title: 'Field with icon',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#ffffff',
    height: 42,
    width: 382,
  }))
  .add('default state', () => (
    <FieldErrorHint />
  ))
  .add('width error message without focus', () => (
    <FieldErrorHint error={'test error message'} />
  ))
  .add('width error message with focus', () => (
    <FieldErrorHint error={'test error message'} active />
  ));
