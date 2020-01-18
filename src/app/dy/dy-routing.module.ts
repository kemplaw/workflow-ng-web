import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DyComponent } from './dy.component'

const routes: Routes = [{ path: '', component: DyComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyRoutingModule {}
