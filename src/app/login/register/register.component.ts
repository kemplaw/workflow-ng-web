import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
      vertificationCode: ['', Validators.required]
    })
  }

  handleSubmit(f: FormControl, e: Event) {
    e.preventDefault()

    console.log(f)
  }
}
