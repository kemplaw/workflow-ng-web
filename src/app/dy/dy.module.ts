import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DyComponent } from './dy.component'
import { DyRoutingModule } from './dy-routing.module'

@NgModule({
  imports: [CommonModule, DyRoutingModule],
  declarations: [DyComponent]
})
export class DyModule {}
