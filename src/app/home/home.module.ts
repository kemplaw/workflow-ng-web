import { NgModule } from '@angular/core'

import { SharedModule } from '../shared'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home'

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
