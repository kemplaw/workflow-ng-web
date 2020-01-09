import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

export interface Nav {
  label: string
  type: string
}

@Component({
  selector: 'app-home-side-nav',
  templateUrl: './home-side-nav.component.html',
  styleUrls: ['./home-side-nav.component.scss']
})
export class HomeSideNavComponent implements OnInit {
  @Input()
  activedNav: string // 当前激活的 nav 项目

  @Input() navList: Nav[] = [
    {
      label: '全部项目',
      type: 'all'
    },
    {
      label: '我参与的',
      type: 'my'
    }
  ] // 导航列表

  @Output() navChange = new EventEmitter()
  constructor() {}

  ngOnInit() {}

  // 点击导航项目回调
  handleClick(nav: Nav) {
    this.activedNav = nav.type
    this.navChange.emit(nav)
  }
}
