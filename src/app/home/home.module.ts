import { NgModule } from '@angular/core'

import { SharedModule } from '../shared'
import { HomeRoutingModule } from './home-routing.module'
import {
  HomeComponent,
  HomeSideNavComponent,
  HomeProjectListComponent
} from './components'

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, HomeSideNavComponent, HomeProjectListComponent]
})
export class HomeModule {}
