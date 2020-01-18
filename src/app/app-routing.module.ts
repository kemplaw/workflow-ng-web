import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home').then(m => m.HomeModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks').then(m => m.TaskModule)
  },
  {
    path: 'dy',
    loadChildren: () => import('./dy').then(m => m.DyModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
