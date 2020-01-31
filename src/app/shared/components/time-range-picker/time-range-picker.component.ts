import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core'

@Component({
  selector: 'app-time-range-picker',
  template: `
    <input
      #picker
      class="timer-range-picker form-control"
      style="width: 305px;"
    />
  `,
  styles: []
})
export class TimeRangePickerComponent implements OnInit, AfterViewInit {
  @ViewChild('picker', { static: true }) private _picker: ElementRef
  @Output('change') changedDate = new EventEmitter()

  @Input() separator: string = ' 至 ' // 分隔符

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this._initTimeRangePicker()
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

    elem.on('apply.daterangepicker', ({ target }) =>
      this.changedDate.emit(this._dateStrFormatter(target.value))
    )
  }

  // 格式化原始日期数据
  private _dateStrFormatter(dateStr: string): { start: string; end: string } {
    if (!dateStr) return { start: '', end: '' }

    const [start, end] = dateStr.trim().split(this.separator)

    return {
      start,
      end
    }
  }
}
