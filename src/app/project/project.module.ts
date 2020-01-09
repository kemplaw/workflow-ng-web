import { NgModule } from '@angular/core'
import { ProjectListComponent, ProjectContainerComponent } from './components'
import { SharedModule } from '../shared'
import { ProjectRoutingModule } from './project-routing.module'

@NgModule({
  imports: [SharedModule, ProjectRoutingModule],
  declarations: [ProjectListComponent, ProjectContainerComponent]
})
export class ProjectModule {}
