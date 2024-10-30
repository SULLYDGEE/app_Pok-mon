import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }
}
