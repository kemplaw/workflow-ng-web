import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  HostBinding
} from '@angular/core'

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('style.transition')
  elemTransition = 'all 0.3s ease'

  @HostBinding('style.cursor')
  cursor = 'pointer'

  constructor(private rd2: Renderer2, private elemRef: ElementRef) {}

  @HostListener('mouseenter')
  handleMouseenter() {
    this.setTranslateYStyle('-10px')
  }

  @HostListener('mouseleave')
  handleMouseleave() {
    this.setTranslateYStyle(0)
  }

  setTranslateYStyle(y: string | number) {
    const elem = this.elemRef.nativeElement

    this.rd2.setStyle(elem, 'transform', `translateY(${y})`)
  }
}
