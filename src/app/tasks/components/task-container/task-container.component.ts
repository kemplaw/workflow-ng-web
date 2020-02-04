import {
  Component,
  OnInit,
  ViewChild,
  ComponentRef,
  ElementRef
} from '@angular/core'
import { Tab } from 'src/app/shared/components'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TaskStatus } from 'src/app/shared'

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {
  taskStatusList: TaskStatus[] = [
    {
      id: '1',
      name: '待处理',
      Tasks: []
    }
  ] // 不同任务状态列表
  taskDialogVisible: string = 'hide'
  addedTaskStatusName: string // 要添加的任务状态名称
  taskDialogForm: FormGroup
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
    this.taskDialogForm = this._formBuilder.group({
      title: ['', Validators.required], // 任务标题
      principal: [null], // 负责人
      date: [''], // 任务日期
      priority: ['1'], // 任务优先级
      remarks: [''] // 备注
    })
  }

  handleCreateTask() {
    this.taskDialogVisible = 'show'
  }

  handleTaskDialogClose() {
    console.log(this.taskDialogForm)
  }

  // 点击添加任务状态按钮
  handleClickTaskStatusAddButton() {
    const taskObj: TaskStatus = {
      id: '1',
      name: this.addedTaskStatusName,
      Tasks: []
    }

    this.taskStatusList.push(taskObj)
  }
}
