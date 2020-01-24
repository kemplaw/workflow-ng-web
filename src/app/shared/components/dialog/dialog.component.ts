import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title?: string = '标题'
  @Input() showFooter?: boolean = false
  visible: boolean = true

  @Output() close = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  // 点击关闭按钮的回调
  handleClickCloseButton() {
    this.visible = false
    this.close.emit()
  }
}
