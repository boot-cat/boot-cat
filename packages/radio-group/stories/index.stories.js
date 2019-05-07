import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-radio-group.js';

storiesOf('BootRadioGroup|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-radio-group></boot-radio-group>
  `,
);
