import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TaskContainerComponent } from './components'

const routes: Routes = [{ path: '', component: TaskContainerComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
