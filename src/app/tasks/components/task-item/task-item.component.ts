import { Component, OnInit, Input } from '@angular/core'
import { Task } from 'src/app/shared'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task // 任务数据

  constructor() {}

  ngOnInit() {}
}
