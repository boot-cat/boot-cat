import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-input-iban.js';

storiesOf('BootInputIban|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-input-iban></boot-input-iban>
  `,
);
