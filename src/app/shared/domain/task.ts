export interface Task {
  id?: number
  name: string // 任务名称
  completed: boolean // 任务是否完成
  priority: string // 任务优先级
  principal?: string // 任务负责人
  startTime?: string // 任务开始时间
  endTime?: string // 任务结束时间
  remarks?: string // 备注
}

export interface TaskStatus {
  id: string
  name: string
  tasks: Task[]
}
