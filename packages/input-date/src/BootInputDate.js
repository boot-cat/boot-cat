import { css, html } from '@lion/core';
import { LionInputDate } from '@lion/input-date';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootInputDate extends BootFieldMixin(LionInputDate) {
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
