import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  shadow: boolean = true

  @Input()
  borderBottom: boolean = false

  constructor(private _router: Router) {}

  ngOnInit() {}

  handleLogout() {
    this._router.navigate(['login'])
  }
}
