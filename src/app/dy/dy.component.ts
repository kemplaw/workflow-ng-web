import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ElementRef
} from '@angular/core'
import { DemoComponent } from './demo.component'
import { DyHostDirective } from './directives'

@Component({
  selector: 'app-dy',
  templateUrl: './dy.component.html',
  styleUrls: ['./dy.component.css']
})
export class DyComponent implements OnInit, OnDestroy {
  componentRef: ComponentRef<DemoComponent>

  @ViewChild(DyHostDirective, { static: true, read: ViewContainerRef })
  dyHost: ViewContainerRef

  @ViewChild('tmp', { read: ViewContainerRef, static: true })
  templateContainerRef: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.createComponent()
  }

  ngOnDestroy() {
    this.componentRef.destroy()
    this.dyHost.clear()
  }

  createComponent() {
    /**
     * 1. 获取宿主容器
     * 2. 获取目标组件工厂
     * 3. 宿主使用组件工厂添加组件到宿主容器之中
     */
    const componentFactory = this.resolver.resolveComponentFactory(
      DemoComponent
    )

    this.dyHost.clear()

    this.componentRef = this.dyHost.createComponent(componentFactory)
  }
}
