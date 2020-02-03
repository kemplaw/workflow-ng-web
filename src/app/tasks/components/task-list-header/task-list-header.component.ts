import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent implements OnInit {
  @Input() name: string // 任务状态标题
  @Input() amount: number // 任务数量

  constructor() {}

  ngOnInit() {}
}
