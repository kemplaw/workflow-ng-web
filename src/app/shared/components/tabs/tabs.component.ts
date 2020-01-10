import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

export interface Tab {
  label: string
  value: string
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[]
  @Input() activedTab: Tab = { label: '', value: '' }
  @Output() changeTab = new EventEmitter()
  @Output() addTab = new EventEmitter()
  constructor() {}

  ngOnInit() {}

  handleClickTab(tab: Tab) {
    this.activedTab = tab
    this.changeTab.emit(tab)
  }

  handleAddTab() {
    this.addTab.emit()
  }
}
