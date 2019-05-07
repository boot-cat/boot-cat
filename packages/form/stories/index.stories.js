import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-form.js';

storiesOf('BootForm|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-form></boot-form>
  `,
);
