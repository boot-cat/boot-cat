import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-input.js';

storiesOf('BootInput|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-input></boot-input>
  `,
);
