import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-demo',
  template: `
    <h1>
      this is a demo component
    </h1>
  `
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
