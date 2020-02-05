import {
  Component,
  OnInit,
  ViewChild,
  ComponentRef,
  ElementRef
} from '@angular/core'
import { Tab } from 'src/app/shared/components'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TaskStatus, Task } from 'src/app/shared'

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

  private _currentTaskStatus: TaskStatus // 当前的任务状态数据
  private _currentTask: Task // 当前选中的任务数据

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

  handleCreateTask(taskStatus: TaskStatus) {
    this.taskDialogVisible = 'show'
    this._currentTaskStatus = taskStatus
  }

  // 点击确认
  handleConfirmTaskForm() {
    const { id } = this._currentTaskStatus
    const {
      title,
      date,
      remarks,
      priority,
      principal
    } = this.taskDialogForm.value

    const newTaskData: Task = {
      id: '1',
      name: title,
      startTime: date.start,
      endTime: date.end,
      remarks,
      priority,
      principal,
      completed: false
    }

    this.taskStatusList
      .find(taskStatus => taskStatus.id === id)
      .Tasks.push(newTaskData)
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
