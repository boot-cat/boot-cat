import { css, html } from '@lion/core';
import { LionInputEmail } from '@lion/input-email';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootInputEmail extends BootFieldMixin(LionInputEmail) {
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
