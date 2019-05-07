import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-steps.js';

storiesOf('BootSteps|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-steps></boot-steps>
  `,
);
