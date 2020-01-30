import { Component, OnInit, Input, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title: string // dialog 标题
  @Input() dialogId: string = 'dialog-hook' // 当前弹窗的 id
  @Input()
  public set visible(v: string) {
    this._toggleDialog(v)
  } // 设置 dialog 显示/隐藏

  constructor() {}

  ngOnInit() {}

  private _toggleDialog(visible: string) {
    ;($(`#${this.dialogId}`) as any).modal(visible)
  }
}
