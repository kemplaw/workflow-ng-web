import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HoverDirective } from './directives'
import {
  HeaderComponent,
  TabsComponent,
  DialogComponent,
  UserSelectorComponent,
  UserListComponent
} from './components'
import { TimeRangePickerComponent } from './components/time-range-picker/time-range-picker.component'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    HoverDirective,
    HeaderComponent,
    TabsComponent,
    DialogComponent,
    UserSelectorComponent,
    UserListComponent,
    TimeRangePickerComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HoverDirective,
    HeaderComponent,
    TabsComponent,
    DialogComponent,
    UserSelectorComponent,
    TimeRangePickerComponent
  ]
})
export class SharedModule {}
