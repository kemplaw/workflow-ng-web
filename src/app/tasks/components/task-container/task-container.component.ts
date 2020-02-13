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
      tasks: []
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
  taskDialogTitle: string = '创建任务' // 任务弹窗标题

  private _newTaskId: number = 1 // 任务 id
  private _currentTaskStatus: TaskStatus // 当前的任务状态数据
  private _currentTaskId: number // 当前选中的任务 id

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
    this.taskDialogTitle = '创建任务'
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
      name: title,
      startTime: date.start,
      endTime: date.end,
      remarks,
      priority,
      principal,
      completed: false
    }

    if (this.taskDialogTitle === '创建任务') {
      newTaskData.id = this._newTaskId++

      this.taskStatusList
        .find(taskStatus => taskStatus.id === id)
        .tasks.push(newTaskData)
    } else {
      newTaskData.id = this._currentTaskId

      const targetTaskStatusList = this.taskStatusList.find(
        ({ id: taskStatusId }) => taskStatusId === id
      )
      const targetTaskIndex = targetTaskStatusList.tasks.findIndex(
        ({ id: taskId }) => taskId === this._currentTaskId
      )

      targetTaskStatusList.tasks = [
        ...targetTaskStatusList.tasks.slice(0, targetTaskIndex),
        newTaskData,
        ...targetTaskStatusList.tasks.slice(targetTaskIndex + 1)
      ]
    }

    this.taskDialogVisible = 'hide'
  }

  // 点击添加任务状态按钮
  handleClickTaskStatusAddButton() {
    const taskObj: TaskStatus = {
      id: '1',
      name: this.addedTaskStatusName,
      tasks: []
    }

    this.taskStatusList.push(taskObj)
  }

  handleClickTaskItem(task: Task) {
    const { name, principal, priority, startTime, endTime, remarks } = task

    this.taskDialogForm.patchValue({
      title: name,
      principal,
      priority,
      date: {
        start: startTime,
        end: endTime
      },
      remarks
    })

    this._currentTaskId = task.id
    this.taskDialogTitle = '编辑任务'
    this.taskDialogVisible = 'show'
  }
}
