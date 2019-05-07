import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../boot-textarea.js';

storiesOf('BootTextarea|Material Extras', module).add(
  'Overview',
  () => html`
    <boot-textarea></boot-textarea>
  `,
);
