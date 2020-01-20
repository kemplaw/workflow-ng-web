import { NgModule } from '@angular/core'
import { DyComponent } from './dy.component'
import { DyRoutingModule } from './dy-routing.module'
import { SharedModule } from '../shared'
import { DyHostDirective } from './directives'
import { DemoComponent } from './demo.component'

@NgModule({
  imports: [SharedModule, DyRoutingModule],
  declarations: [DyComponent, DyHostDirective, DemoComponent],
  entryComponents: [DemoComponent]
})
export class DyModule {}
