import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-select.js';

storiesOf('BootSelect|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-select></boot-select>
  `,
);
