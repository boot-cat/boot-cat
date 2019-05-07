import { css, html } from '@lion/core';
import { LionCheckbox } from '@lion/checkbox';

export class BootCheckbox extends LionCheckbox {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          /* your overrides */
        }
      `,
    ];
  }
}
