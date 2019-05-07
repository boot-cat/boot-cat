import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-button.js';

storiesOf('BootButton|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-button></boot-button>
  `,
);
