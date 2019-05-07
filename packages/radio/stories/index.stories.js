import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-radio.js';

storiesOf('BootRadio|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-radio></boot-radio>
  `,
);
