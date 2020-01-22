import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HoverDirective } from './directives'
import { HeaderComponent, TabsComponent, DialogComponent } from './components'
import { DialogService, OverlayService } from './services'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    HoverDirective,
    HeaderComponent,
    TabsComponent,
    DialogComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HoverDirective,
    HeaderComponent,
    TabsComponent,
    DialogComponent
  ],
  providers: [DialogService, OverlayService]
})
export class SharedModule {}
