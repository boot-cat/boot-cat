import { css, html } from '@lion/core';
import { LionCheckboxGroup } from '@lion/checkbox-group';
import { BootFieldMixin } from '@boot-cat/field-mixin';

export class BootCheckboxGroup extends BootFieldMixin(LionCheckboxGroup) {
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
