import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { User } from 'src/app/shared'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[]
  @Output() change = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  handleClickItem(user: User) {
    this.change.emit(user)
  }
}
