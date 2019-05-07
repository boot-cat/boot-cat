import { css, html } from '@lion/core';
import { LionTextarea } from '@lion/textarea';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootTextarea extends BootFieldMixin(LionTextarea) {
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
