import { Component, OnInit } from '@angular/core'
import { Nav } from '../home-side-nav'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = '全部项目' // 当前标题

  constructor() {}

  ngOnInit() {}

  handleNavChanged(nav: Nav) {
    this.title = nav.label
  }
}
