import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HoverDirective } from './directives'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [HoverDirective],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, HoverDirective]
})
export class SharedModule {}
