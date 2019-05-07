import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-icon.js';

storiesOf('BootIcon|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-icon></boot-icon>
  `,
);
