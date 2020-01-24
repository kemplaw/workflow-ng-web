import {
  Injectable,
  Inject,
  Type,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  EmbeddedViewRef
} from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { OverlayService } from './overlay.service'

// Dialog 配置
export interface DialogConfig {
  data?: any
  width: string
  height: string
  top?: string
  left?: string
}

@Injectable()
export class DialogService<T> {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _injector: Injector,
    private _overlay: OverlayService,
    private appRef: ApplicationRef,
    private resolver: ComponentFactoryResolver
  ) {}

  open(componentRef: Type<T>, config?: DialogConfig) {
    // 1. 创建 overlay 容器
    const overlayRef = this._createOverlay()

    // 2. 添加 dialog 容器到 overlay 下的 pane 容器中
    const dialogContainer = this._attachDialogContainer(overlayRef)

    // 3. 添加用户自定义的 dialog 内容到 dialog 容器之中
    const dialogRef = this._attachDialogContent(componentRef, dialogContainer)

    return dialogRef
  }

  // 创建 overlay
  private _createOverlay(): HTMLElement {
    return this._overlay.create()
  }

  // 添加 dialog 容器
  private _attachDialogContainer(overlayRef: HTMLElement): HTMLElement {
    const dialogContainer = this._document.createElement('div')

    dialogContainer.classList.add('dialog-container')

    overlayRef.appendChild(dialogContainer)

    return dialogContainer
  }

  private _attachDialogContent<T>(
    componentRef: Type<T>,
    dialogContainer: HTMLElement
  ): any {
    const component = this.resolver
      .resolveComponentFactory(componentRef)
      .create(this._injector)

    this.appRef.attachView(component.hostView)

    const componentHtmlElement = (component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement

    dialogContainer.appendChild(componentHtmlElement)
  }
}
