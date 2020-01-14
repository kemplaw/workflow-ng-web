import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DialogComponent } from '../../components'
import { NewTaskComponent } from 'src/app/tasks'

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class DialogModule {}
