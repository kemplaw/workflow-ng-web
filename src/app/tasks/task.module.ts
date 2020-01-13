import { NgModule } from '@angular/core'
import {
  TaskContainerComponent,
  TaskListHeaderComponent,
  TaskItemComponent,
  TaskListComponent
} from './components'
import { SharedModule } from '../shared'
import { TaskRoutingModule } from './task-routing.module'
import { NewTaskComponent } from './components/new-task'

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
