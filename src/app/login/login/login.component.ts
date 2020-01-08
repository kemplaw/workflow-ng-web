import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleSubmit(f: FormControl, e: Event) {
    e.preventDefault()

    if (!f.valid) return

    this.router.navigateByUrl('home')
  }
}
