import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable()
export class OverlayService {
  _containerElement: HTMLElement

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  create(): HTMLElement {
    const host = this._document.createElement('div')

    host.classList.add('overlay-wrapper')

    const pane = this._createPanelContainer(host)

    this.getContainerElement().appendChild(host)

    return pane
  }

  // 获取容器元素
  getContainerElement(): HTMLElement {
    if (!this._containerElement) {
      this._createContainer()
    }

    return this._containerElement
  }

  // 创建容器元素
  protected _createContainer() {
    const containerClass = 'overlay-container'
    const previosContainers = this._document.getElementsByClassName(
      containerClass
    )

    // 移除之前存在的容器
    for (let i = 0; i < previosContainers.length; i++) {
      const element = previosContainers[i]

      element!.parentNode.removeChild(element)
    }

    // 创建新容器
    const container = this._document.createElement('div')

    container.classList.add(containerClass)

    // 添加到 body 之中
    this._document.body.appendChild(container)

    this._containerElement = container
  }

  // 创建内部 pane 边框 容器元素
  protected _createPanelContainer(host: HTMLElement): HTMLElement {
    const pane = this._document.createElement('div')

    pane.id = `overlay-pane-container`
    pane.classList.add('overlay-pane-contanier')

    host.appendChild(pane)

    return pane
  }
}
