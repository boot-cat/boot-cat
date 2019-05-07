import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-checkbox-group.js';

storiesOf('BootCheckboxGroup|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-checkbox-group></boot-checkbox-group>
  `,
);
