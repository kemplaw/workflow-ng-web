import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HoverDirective } from './directives'
import { HeaderComponent, TabsComponent } from './components'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [HoverDirective, HeaderComponent, TabsComponent],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HoverDirective,
    HeaderComponent,
    TabsComponent
  ]
})
export class SharedModule {}
