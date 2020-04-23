import { Task } from '../models/Task';

export class TaskService{
    taskList: Task[] = [
        {
            name: 'PHP',
            subTasks: [{title:'Apprendre les bases de PHP',isChecked:false}],
            isChecked: false
        },
        {
            name: 'Java',
            subTasks: [{title:'Apprendre les bases de Java',isChecked:false}],
            isChecked: false
            
        },
        {
            name: 'React js',
            subTasks: [{title:'Apprendre les bases de React',isChecked:false}],
            isChecked: false
        }
    ]

    getTask(index: number){
        return this.taskList[index];
    }
}