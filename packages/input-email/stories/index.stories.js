import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-input-email.js';

storiesOf('BootInputEmail|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-input-email></boot-input-email>
  `,
);
