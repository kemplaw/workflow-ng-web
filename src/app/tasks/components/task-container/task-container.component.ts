import { Component, OnInit } from '@angular/core'
import { Tab, NewTaskDialogComponent } from 'src/app/shared/components'
import { DialogService } from 'src/app/shared'

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {
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

  constructor(private dialogService: DialogService<NewTaskDialogComponent>) {}

  ngOnInit() {}

  handleCreateTask() {
    this.dialogService.open(NewTaskDialogComponent, {
      position: {
        left: '300px',
        top: '300px'
      },
      size: {
        width: '350px',
        height: '500px'
      }
    })
  }
}
