import {
  Component,
  OnInit,
  ViewChild,
  ComponentRef,
  ElementRef
} from '@angular/core'
import { Tab, DialogComponent } from 'src/app/shared/components'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {
  createDialogVisible: string = 'hide'
  createTaskDialogForm: FormGroup
  taskTabs: Tab[] = [
    {
      label: '任务',
      value: '1'
    },
    {
      label: '概览',
      value: '2'
    },
    {
      label: '统计',
      value: '3'
    }
  ]
  activedTab: Tab = { label: '任务', value: '1' }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createTaskDialogForm = this._formBuilder.group({
      title: ['', Validators.required],
      users: []
    })
  }

  handleCreateTask() {
    this.createDialogVisible = 'show'
  }
}
