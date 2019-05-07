import { css, html } from '@lion/core';
import { LionSelect } from '@lion/select';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootSelect extends BootFieldMixin(LionSelect) {
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
