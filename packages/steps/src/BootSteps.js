import { css, html } from '@lion/core';
import { LionSteps } from '@lion/steps';

export class BootSteps extends LionSteps {
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
