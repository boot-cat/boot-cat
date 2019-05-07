import { css, html } from '@lion/core';
import { LionInputIban } from '@lion/input-iban';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootInputIban extends BootFieldMixin(LionInputIban) {
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
