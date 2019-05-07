import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-checkbox.js';

storiesOf('BootCheckbox|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-checkbox></boot-checkbox>
  `,
);
