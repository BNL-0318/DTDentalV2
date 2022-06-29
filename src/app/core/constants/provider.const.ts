import { forwardRef, Provider } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

export class CRProvider {
  checkComponent: string;
  constructor(checkComponent: string) {
    this.checkComponent = checkComponent;
  }
  providers(): Provider {
    const provider: Provider = [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => this.checkComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => this.checkComponent),
      multi: true
    }]
    return provider;
  }
}
