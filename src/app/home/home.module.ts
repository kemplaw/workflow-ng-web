import { NgModule } from '@angular/core'

import { SharedModule } from '../shared'
import { HomeRoutingModule } from './home-routing.module'
import {
  HomeComponent,
  HomeHeaderComponent,
  HomeSideNavComponent,
  HomeProjectListComponent
} from './components'

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeSideNavComponent,
    HomeProjectListComponent
  ]
})
export class HomeModule {}
