import { NgModule } from '@angular/core'
import {
  ProjectListComponent,
  ProjectContainerComponent,
  ProjectItemComponent,
  ProjectHeaderComponent
} from './components'
import { SharedModule } from '../shared'
import { ProjectRoutingModule } from './project-routing.module'

@NgModule({
  imports: [SharedModule, ProjectRoutingModule],
  declarations: [
    ProjectListComponent,
    ProjectContainerComponent,
    ProjectItemComponent,
    ProjectHeaderComponent
  ]
})
export class ProjectModule {}
