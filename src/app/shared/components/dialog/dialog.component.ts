import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core'

export type ModalParamStringTypeMap =
  | 'toggle'
  | 'show'
  | 'hide'
  | 'handleUpdate'
  | 'dispose'

export interface ModalMethod {
  (p: ModalParamStringTypeMap | object): void
}

interface BootstrapDialogDomRef extends JQuery<HTMLElement> {
  modal: ModalMethod
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit {
  @Output() close = new EventEmitter() // 关闭事件发射
  @Output() visibleChange = new EventEmitter() // 发射 dialog 的 visible 变化事件
  @Input() width: string = '' // dialog 容器宽度
  @Input() customFooter: boolean = false // 是否启用自定义底部按钮
  @Input() verticallyCentered: boolean // 是否垂直居中
  @Input() scrollable: boolean // 是否可滚动
  @Input() title: string // dialog 标题
  @Input() dialogId: string = 'dialog-hook' // 当前弹窗的 id
  @Input() disabled: boolean = true // 默认的确认键是否位禁用状态
  @Input()
  public set visible(v: ModalParamStringTypeMap) {
    this._visible = v
    this._toggleDialog(v)
  } // 设置 dialog 显示/隐藏

  public get visible(): ModalParamStringTypeMap {
    return this._visible
  }

  // 获取元素 dom 引用
  private get _dialogDomRef(): BootstrapDialogDomRef {
    return $(`#${this.dialogId}`) as BootstrapDialogDomRef
  }

  // 设置 dialog 容器样式

  public get dialogClassList(): object {
    return {
      'modal-dialog-scrollable': this.scrollable,
      'modal-dialog-centered': this.verticallyCentered
    }
  }

  private _visible: ModalParamStringTypeMap // dialog visible 状态

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this._dialogListener('hidden.bs.modal', 'hide')
    this._dialogListener('shown.bs.modal', 'show')
  }

  // 切换 dialog 显示隐藏
  private _toggleDialog(visible: ModalParamStringTypeMap) {
    this._dialogDomRef.modal(visible)
  }

  // 监听 dialog 事件
  private _dialogListener(event: string, visible: ModalParamStringTypeMap) {
    this._dialogDomRef.on(event, () => {
      this.visible = visible
      this.visibleChange.emit(visible)
    })
  }

  handleConfirm() {
    this.close.emit()
  }
}
