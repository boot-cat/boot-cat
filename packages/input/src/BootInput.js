import { css, html } from '@lion/core';
import { LionInput } from '@lion/input';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootInput extends BootFieldMixin(LionInput) {
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
