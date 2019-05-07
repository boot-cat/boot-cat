import { css, html } from '@lion/core';
import { LionRadio } from '@lion/radio';

export class BootRadio extends LionRadio {
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
