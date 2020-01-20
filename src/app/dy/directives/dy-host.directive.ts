import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appDyHost]'
})
export class DyHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
