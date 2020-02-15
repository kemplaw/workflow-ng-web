import { NgModule } from '@angular/core'
import { MyComponent } from './my.component'
import { SharedModule } from '../shared'
import { MyRoutingModule } from './my-routing.module'

@NgModule({
  imports: [SharedModule, MyRoutingModule],
  declarations: [MyComponent]
})
export class MyModule {}
