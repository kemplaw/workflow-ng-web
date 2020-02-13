import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Task } from 'src/app/shared'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task // 任务数据

  @Output() click = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.click.emit()
  }
}
