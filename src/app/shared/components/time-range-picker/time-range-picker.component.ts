import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  forwardRef,
  AfterContentInit
} from '@angular/core'
import { Subject } from 'rxjs'
import { startWith } from 'rxjs/operators'
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl
} from '@angular/forms'

interface DateObj {
  start: string
  end: string
}

@Component({
  selector: 'app-time-range-picker',
  template: `
    <input
      #picker
      class="timer-range-picker form-control"
      style="width: 305px;"
    />
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // 元数据的时候 组件还未创建， 使用forwardref 可以等组件创建完成之后再引入
      useExisting: forwardRef(() => TimeRangePickerComponent),
      multi: true // 处理多对一
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TimeRangePickerComponent),
      multi: true // 处理多对一
    }
  ]
})
export class TimeRangePickerComponent
  implements OnInit, AfterContentInit, ControlValueAccessor {
  @ViewChild('picker', { static: true }) private _picker: ElementRef
  @Output('change') changedDate = new EventEmitter()

  @Input() separator: string = ' 至 ' // 分隔符

  private _selectedDate: DateObj
  private _date = new Subject<DateObj>()

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this._initTimeRangePicker()
  }

  private _propagateChange = (_: any) => {}

  writeValue(obj: any): void {
    this._date.next(obj)
  }

  registerOnChange(fn: any): void {
    this._propagateChange = fn
  }

  registerOnTouched(fn: any): void {}

  validate(c: FormControl): { [key: string]: any } {
    const valid = this._selectedDate
      ? null
      : {
          dateInvalid: {
            valid: false
          }
        }

    return valid
  }

  // 初始化日期选择器
  private _initTimeRangePicker() {
    const elem = $(this._picker.nativeElement) as any

    elem.daterangepicker({
      timePicker: true,
      autoApply: true,
      locale: {
        format: 'YYYY-MM-DD HH:mm:ss',
        separator: this.separator,
        applyLabel: '确定',
        cancelLabel: '取消',
        fromLabel: '从',
        toLabel: '到',
        customRangeLabel: '自定义',
        weekLabel: '周',
        daysOfWeek: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        monthNames: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        firstDay: 1
      }
    })

    this._initObservableData(elem[0])

    elem.on('apply.daterangepicker', e => {
      const formattedDateData = this._dateStrFormatter(e.target.value)

      this._date.next(formattedDateData)
      this.changedDate.emit(formattedDateData)
    })
  }

  // 格式化原始日期数据
  private _dateStrFormatter(dateStr: string): DateObj {
    if (!dateStr) return { start: '', end: '' }

    const [start, end] = dateStr.trim().split(this.separator)

    return {
      start,
      end
    }
  }

  // 初始化表单数据
  private _initObservableData(elem: HTMLInputElement) {
    const startDate = this._dateStrFormatter(elem.value)

    const date$ = this._date.asObservable().pipe(startWith(startDate))

    date$.subscribe(date => {
      this._selectedDate = date
      this._propagateChange(date)
      this._setInputElemValue(elem, date)
    })
  }

  // 设置 dom 中 value 的值
  private _setInputElemValue(elem: HTMLInputElement, value: DateObj) {
    const { start, end } = value

    elem.value = `${start}${this.separator}${end}`
  }
}
