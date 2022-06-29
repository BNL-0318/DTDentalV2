import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLabelCategories]',
})
export class LabelCategoriesDirective implements OnInit {
  @Input() appLabelCategories?: string;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    switch (this.appLabelCategories) {
      case 'b30a2b69-2423-44ee-86a5-08d8a64fdb26':
        this.el.nativeElement.classList.add('bg-info-400');
        break;
      case 'aa99cf85-a161-4eb2-e424-08da41f5e547':
        this.el.nativeElement.classList.add('bg-success-400');
        break;
      case '1b84f5c7-eede-42b9-e426-08da41f5e547':
        this.el.nativeElement.classList.add('bg-error-400');
        break;
      case 'fe0e87ea-4ee2-4efa-e427-08da41f5e547':
        this.el.nativeElement.classList.add('bg-warning-400');
        break;
      default:
        this.el.nativeElement.classList.add('bg-warning-100');
    }
  }
}
