import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HoverDirective } from './directives'
import {
  HeaderComponent,
  TabsComponent,
  NewTaskDialogComponent
} from './components'
import { DialogModule } from './modules'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, DialogModule],
  declarations: [
    HoverDirective,
    HeaderComponent,
    TabsComponent,
    NewTaskDialogComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HoverDirective,
    HeaderComponent,
    TabsComponent,
    NewTaskDialogComponent
  ],
  entryComponents: [NewTaskDialogComponent]
})
export class SharedModule {}
