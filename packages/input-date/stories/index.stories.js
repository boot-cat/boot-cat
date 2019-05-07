import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-input-date.js';

storiesOf('BootInputDate|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-input-date></boot-input-date>
  `,
);
