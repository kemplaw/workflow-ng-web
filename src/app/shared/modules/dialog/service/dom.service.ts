import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  Injector,
  ComponentRef,
  ApplicationRef,
  EmbeddedViewRef,
  Inject,
  ViewRef
} from '@angular/core'
import { DOCUMENT } from '@angular/common'

export interface DialogPosition {
  top: string
  left: string
}

export interface DialogSize {
  width: string
  height: string
}

export interface DialogConfig {
  inputs?: object
  outputs?: object
  position?: DialogPosition
  size?: DialogSize
}

@Injectable({
  providedIn: 'root'
})
export class DomService {
  /**
   * 动态组件步骤：
   * 1. 获取组件工厂类，创建目标组件
   * 2. 将一些组件相关的配置 input output 打入到该组件中
   * 3. 将打包好的组件 添加到 ng 组件树中
   * 4. 添加 组件中的 dom 到 dom 树中
   */

  componentHostView: ViewRef

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private componentResolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // 添加组件到应用组件树
  appendComponentToAppTree<T>(
    component: Type<T>,
    componentConfig: DialogConfig
  ): HTMLElement {
    // 获取组件工厂
    const componentRef = this.componentResolver
      .resolveComponentFactory(component)
      .create(this.injector) // 创建组件并传入依赖注入的对象

    // 注入 input 和 output 配置
    this.attachInputAndOutputToComponent(componentConfig, componentRef)

    // 将包装好的组件加入 ng 的组件视图之中
    const componentHostView = componentRef.hostView

    this.componentHostView = componentHostView

    this.appRef.attachView(componentHostView)

    // 组件添加到 dom 树之中

    // 从组件中获取 dom 节点
    const domElement = (componentHostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement

    const dialogElement = this.createContainerElement(
      'overlay-container'
    ).appendChild(
      this.createContainerElement('dialog-container').appendChild(domElement)
    )
    // 添加子节点
    this.document.body.appendChild(dialogElement)

    return dialogElement
  }

  // 注入 input 以及 output 配置
  attachInputAndOutputToComponent(
    config: DialogConfig,
    componentRef: ComponentRef<any>
  ) {
    const { inputs, outputs } = config

    this.setObjectToTarget(inputs, componentRef)
    this.setObjectToTarget(outputs, componentRef)
  }

  // 移除组件
  removeComponent() {
    if (!this.componentHostView) return

    this.appRef.detachView(this.componentHostView)
  }

  setObjectToTarget(obj: object, target: ComponentRef<any>) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key]
        target.instance[key] = element
      }
    }
  }

  createContainerElement(id: string): HTMLElement {
    const overlayElem = this.document.createElement('div')

    overlayElem.id = id

    return overlayElem
  }
}
