import { Component, OnInit } from '@angular/core'
import { ModalParamStringTypeMap } from 'src/app/shared/components'
import { FormGroup } from '@angular/forms'

export interface Project {
  id?: string
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
      title: '测试项目',
      desc: '这是一个测试项目',
      collected: false
    }
  ] // 项目列表
  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.createProjectDialogVisible = 'show'
  }
}
