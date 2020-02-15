import { Component, OnInit } from '@angular/core'
import { ModalParamStringTypeMap } from 'src/app/shared/components'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

export interface Project {
  id?: number
  title: string
  collected: boolean
  desc?: string
}

@Component({
  selector: 'app-home-project-list',
  templateUrl: './home-project-list.component.html',
  styleUrls: ['./home-project-list.component.scss']
})
export class HomeProjectListComponent implements OnInit {
  createProjectDialogVisible: ModalParamStringTypeMap = 'hide'
  createProjectForm: FormGroup
  projects: Project[] = [
    {
      id: 1,
      title: '测试项目',
      desc: '这是一个测试项目',
      collected: false
    }
  ] // 项目列表
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createProjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['']
    })
  }

  handleClick() {
    this.createProjectDialogVisible = 'show'
  }

  handleCreateProject() {
    const { name: title, desc } = this.createProjectForm.value

    const newProject = { id: 2, title, desc, collected: false }

    this.projects.push(newProject)
    this._resetCreateForm()
  }

  private _resetCreateForm() {
    this.createProjectForm.reset()
    this.createProjectDialogVisible = 'hide'
  }
}
