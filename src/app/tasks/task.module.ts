import { NgModule } from '@angular/core'
import {
  TaskContainerComponent,
  TaskListHeaderComponent,
  TaskItemComponent,
  TaskListComponent,
  NewTaskComponent
} from './components'
import { SharedModule } from '../shared'
import { TaskRoutingModule } from './task-routing.module'

@NgModule({
  imports: [SharedModule, TaskRoutingModule],
  declarations: [
    TaskContainerComponent,
    TaskListHeaderComponent,
    TaskItemComponent,
    TaskListComponent,
    NewTaskComponent
  ],
  entryComponents: [NewTaskComponent]
})
export class TaskModule {}
