import { Component, OnInit } from '@angular/core'
import { Tab } from 'src/app/shared/components'
import { DialogService } from 'src/app/shared'
import { NewTaskComponent } from '../new-task'

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

  constructor(private dialogService: DialogService<NewTaskComponent>) {}

  ngOnInit() {}

  handleCreateTask() {
    this.dialogService.open(NewTaskComponent, {
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
