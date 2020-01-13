import { Injectable, Type, Inject } from '@angular/core'
import {
  DomService,
  DialogConfig,
  DialogPosition,
  DialogSize
} from './dom.service'
import { BehaviorSubject } from 'rxjs'
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class DialogService<T> {
  private dialogElem: HTMLElement
  private data$ = new BehaviorSubject<object | null>(null)
  private readonly overlayElementId = 'overlay-container'

  constructor(
    private domService: DomService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(component: Type<T>, dialogConfig: DialogConfig) {
    const dialogElem = this.domService.appendComponentToAppTree<T>(
      component,
      dialogConfig
    )

    this.dialogElem = dialogElem

    this.setElementStyle(dialogElem, dialogConfig.position, dialogConfig.size)

    this.toggleAll()

    this.data$.next(null)
  }

  close(data: object | null) {
    this.domService.removeComponent()
    this.toggleAll()
    this.data$.next(data)

    return this.data$.asObservable()
  }

  private toggleAll() {
    const overlayElem = this.document.getElementById(this.overlayElementId)

    this.toggleElementVisibility(this.dialogElem)
    this.toggleElementVisibility(overlayElem)
  }

  private toggleElementVisibility(elem: HTMLElement) {
    if (!elem) return

    if (elem.classList.contains('show')) {
      elem.classList.remove('show')
      elem.classList.add('hidden')

      return
    }

    if (elem.classList.contains('hidden')) {
      elem.classList.remove('hidden')
      elem.classList.add('show')
    }
  }

  // 设置元素位置以及大小
  private setElementStyle(
    targetElem: HTMLElement,
    position: DialogPosition,
    size: DialogSize
  ) {
    if (!targetElem) return null

    const { top, left } = position
    const { width, height } = size

    targetElem.style.top = top
    targetElem.style.left = left
    targetElem.style.width = width
    targetElem.style.height = height
  }
}
