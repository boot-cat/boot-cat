import { css, html } from '@lion/core';
import { LionButton } from '@lion/button';

export class BootButton extends LionButton {
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
