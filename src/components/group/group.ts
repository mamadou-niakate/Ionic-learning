import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/TaskService';
import { Task } from '../../models/Task';
import { SingleTaskPage } from '../../pages/single-task/single-task';
import { NavController, reorderArray, MenuController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'group',
  templateUrl: 'group.html'
})
export class GroupComponent implements OnInit{
  tasksList: Task[];
  wantToAddSubTask: boolean = false;

  constructor(private taskService: TaskService,
              private navCtrl: NavController,
              private menuCtrl: MenuController) {}
  
  ngOnInit(): void {
    this.tasksList = this.taskService.taskList;
  }



  openTask(index: number){
    this.navCtrl.push(SingleTaskPage,{index:index});    
  }

  formSubmit(f: NgForm){
    const newTask = new Task(f.value.tache,[{title:'',isChecked:false}],false);
    this.taskService.taskList.push(newTask);
    f.reset();
    this.wantToAddSubTask = !this.wantToAddSubTask;
  }

  openOrSubmitForm(){
    this.wantToAddSubTask = !this.wantToAddSubTask;
  }

  reorderItems(indexes: any){
    this.tasksList = reorderArray(this.tasksList, indexes);
  }

  deleteItem(task: any){
    let deleledTastIndex = this.tasksList.indexOf(task);
    this.tasksList.splice(deleledTastIndex,1);
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }  
}
