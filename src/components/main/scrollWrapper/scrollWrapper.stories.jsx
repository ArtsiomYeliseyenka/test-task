import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withReadme } from 'storybook-readme';
import { ScrollWrapper } from './scrollWrapper';
import README from './README.md';

const shortText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
const longText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
  'Amet aspernatur commodi dicta, eos possimus quidem saepe vitae?' +
  'Ad, aliquam commodi consequatur cumque earum, eius expedita harum maiores quod rerum saepe.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
  'Amet aspernatur commodi dicta, eos possimus quidem saepe vitae?' +
  'Ad, aliquam commodi consequatur cumque earum, eius expedita harum maiores quod rerum saepe.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
  'Amet aspernatur commodi dicta, eos possimus quidem saepe vitae?' +
  'Ad, aliquam commodi consequatur cumque earum, eius expedita harum maiores quod rerum saepe.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
  'Amet aspernatur commodi dicta, eos possimus quidem saepe vitae?' +
  'Ad, aliquam commodi consequatur cumque earum, eius expedita harum maiores quod rerum saepe.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
  'Amet aspernatur commodi dicta, eos possimus quidem saepe vitae?' +
  'Ad, aliquam commodi consequatur cumque earum, eius expedita harum maiores quod rerum saepe.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
  'Amet aspernatur commodi dicta, eos possimus quidem saepe vitae?' +
  'Ad, aliquam commodi consequatur cumque earum, eius expedita harum maiores quod rerum saepe.';

storiesOf('Components/Main/scrollWrapper', module)
  .addDecorator(host({
    title: 'Big button component',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#fff',
    height: 250,
    width: 400,
  }))
  .addDecorator(withReadme(README))
  .add('default state', () => (
    <ScrollWrapper>
      <div>{shortText}</div>
    </ScrollWrapper>
  ))
  .add('with vertical scroll', () => (
    <ScrollWrapper>
      <div>{longText}</div>
    </ScrollWrapper>
  ))
  .add('with horizontal scroll', () => (
    <ScrollWrapper>
      <div style={{ width: 2000 }}>{longText}</div>
    </ScrollWrapper>
  ))
  .add('with both scrolls', () => (
    <ScrollWrapper>
      <div style={{ width: 600 }}>{longText}</div>
    </ScrollWrapper>
  ))
  .add('autoheight (grows with content)', () => (
    <ScrollWrapper autoHeight>
      <div>{longText}</div>
    </ScrollWrapper>
  ))
  .add('autoheight limited (autoHeightMax = 100px)', () => (
    <ScrollWrapper autoHeight autoHeightMax={100}>
      <div>{longText}</div>
    </ScrollWrapper>
  ))
;
