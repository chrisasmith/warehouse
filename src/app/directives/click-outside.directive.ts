import { Directive,
  Output,
  EventEmitter,
  ElementRef,
  HostListener } from '@angular/core';

@Directive({
  selector: '[clickedOutside]',
})
export class ClickOutsideDirective {

  @Output() clickedOutside = new EventEmitter<void>();

  private isFocusInsideComponent = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    this.isFocusInsideComponent = true;
    if (!clickedInside) {
      this.clickedOutside.emit();
    }
  }
}
