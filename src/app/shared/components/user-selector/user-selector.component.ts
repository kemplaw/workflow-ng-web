import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core'
import {
  FormGroup,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  FormControl
} from '@angular/forms'
import { User } from '../../domain'
import { Subject, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserSelectorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserSelectorComponent),
      multi: true
    }
  ]
})
export class UserSelectorComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  userSelectorForm: FormGroup

  users: User[] = [
    {
      id: '1',
      name: '穷哈'
    }
  ]

  selectedUser: User = null // 选中的人

  private _selectedUser = new Subject<User>() // 选中的人

  private _sub: Subscription

  public get username(): string {
    return this.selectedUser ? this.selectedUser.name : '待认领'
  }

  constructor() {}

  ngOnInit() {
    const selectedUser$ = this._selectedUser
      .asObservable()
      .pipe(startWith(null))

    this._sub = selectedUser$.subscribe(user => {
      this.selectedUser = user
      this._propagateChange(user)
    })
  }

  ngOnDestroy() {
    this._sub.unsubscribe()
  }

  private _propagateChange(_: any) {}

  writeValue(obj: any): void {
    this._selectedUser.next(obj)
  }

  registerOnChange(fn: any): void {
    this._propagateChange = fn
  }

  registerOnTouched(fn: any): void {}

  validate(c: FormControl): { [key: string]: any } {
    return this.selectedUser
      ? null
      : {
          selectedUserInValid: {
            valid: false
          }
        }
  }

  handleChangeUser(user: User) {
    this._selectedUser.next(user)
  }
}
