import { NgModule } from '@angular/core'
import {
  TaskContainerComponent,
  TaskListHeaderComponent,
  TaskItemComponent,
  TaskListComponent
} from './components'
import { SharedModule } from '../shared'
import { TaskRoutingModule } from './task-routing.module'

@NgModule({
  imports: [SharedModule, TaskRoutingModule],
  declarations: [
    TaskContainerComponent,
    TaskListHeaderComponent,
    TaskItemComponent,
    TaskListComponent
  ]
})
export class TaskModule {}
