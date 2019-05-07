import { dedupeMixin, css } from '@lion/core';
import '@boot-cat/validation-feedback/boot-validation-feedback.js';

export const BootFieldMixin = dedupeMixin(
  superclass =>
    // eslint-disable-next-line
    class BootFieldMixin extends superclass {
      get slots() {
        return Object.assign(super.slots, {
          feedback: () => document.createElement('boot-validation-feedback'),
        });
      }

      static get styles() {
        return [
          css`
            /* Your general style overrides */
          `,
        ];
      }
    },
);
