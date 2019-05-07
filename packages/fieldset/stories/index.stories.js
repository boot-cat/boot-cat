import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-fieldset.js';

storiesOf('BootFieldset|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-fieldset></boot-fieldset>
  `,
);
