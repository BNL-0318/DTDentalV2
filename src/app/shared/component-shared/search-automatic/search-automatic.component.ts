import {
  AfterViewInit,
  Component, forwardRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-search-automatic',
  templateUrl: './search-automatic.component.html',
  styleUrls: ['./search-automatic.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchAutomaticComponent),
      multi: true,
    },
  ],
})
export class SearchAutomaticComponent
  implements AfterViewInit, ControlValueAccessor
{
  @Input() placeholder: string = 'Tìm kiếm';
  public value = new FormControl();

  constructor() {}

  ngAfterViewInit() {
    this.value.valueChanges.subscribe((x) => {
      this.onChangeFn(x);
    });
  }

  writeValue(value: number): void {
    this.value.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {}

  onChangeFn = (_: any) => {};
}
