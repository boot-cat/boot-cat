import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-input-amount.js';

storiesOf('BootInputAmount|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-input-amount></boot-input-amount>
  `,
);
