import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  Injector
} from '@angular/core'

interface DialogConfig {
  position?: {
    top: string
    left: string
    width: string
    height: string
  }
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

  constructor(
    private injector: Injector,
    private componentResolver: ComponentFactoryResolver
  ) {}

  // 添加组件到应用组件树
  appendComponentToAppTree(
    parentId: string,
    component: Type<any>,
    componentConfig: object
  ) {
    // 获取组件工厂
    const componentRef = this.componentResolver
      .resolveComponentFactory(component)
      .create(this.injector) // 创建组件并传入依赖注入的对象

    // 注入 input 和 output 配置
  }

  attachConfigToComponent(config: DialogConfig) {}
}
