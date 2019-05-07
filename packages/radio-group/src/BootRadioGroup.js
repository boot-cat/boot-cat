import { css, html } from '@lion/core';
import { LionRadioGroup } from '@lion/radio-group';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootRadioGroup extends BootFieldMixin(LionRadioGroup) {
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
