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
    path: 'my',
    loadChildren: () => import('./my').then(m => m.MyModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
