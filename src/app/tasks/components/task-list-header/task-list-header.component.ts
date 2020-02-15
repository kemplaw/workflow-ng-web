import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit {
  @Input() name: string // 任务状态标题
  @Input() amount: number // 任务数量

  @Output() change = new EventEmitter()
  @Output() delete = new EventEmitter()

  dropdownTitle: string = '列表菜单' // 列表菜单名称
  dropdownType: string // dropdown 菜单类型

  editResult: any = '' // 编辑名称的结果

  constructor() {}

  ngOnInit() {}

  handleEdit(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    this.dropdownType = 'edit'
    this.dropdownTitle = '编辑列表'
  }

  handleDelete(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    this.dropdownType = 'delete'
    this.dropdownTitle = '删除列表'
  }

  handleClickDropdownMenu(e: Event) {
    e.preventDefault()
    e.stopPropagation()
  }

  handleResetDropdownMenu() {
    this.dropdownTitle = '列表菜单'
    this.dropdownType = ''
  }

  handleConfirmEdit() {
    if (!this.editResult) return

    this.change.emit(this.editResult)
    this.editResult = ''

    this.handleResetDropdownMenu()
  }

  handleConfirmDelete() {
    this.delete.emit()
  }
}
