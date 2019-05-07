import { css, html } from '@lion/core';
import { LionInputAmount } from '@lion/input-amount';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootInputAmount extends BootFieldMixin(LionInputAmount) {
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
