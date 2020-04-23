import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, reorderArray, Checkbox, MenuController } from 'ionic-angular';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/TaskService';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-single-task',
  templateUrl: 'single-task.html',
})
export class SingleTaskPage implements OnInit {
  task: Task;
  wantToAddSubTask: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private taskService: TaskService,
              private menuCtrl: MenuController) {}
  
  ngOnInit(): void {
    let index = this.navParams.get('index');
    this.task = this.taskService.getTask(index);
  }

  formSubmit(f: NgForm){
    let subTask = {
      title: f.value.sous_tache,
      isChecked: false
    }
    this.task.subTasks.push(subTask);
    f.reset();
    this.wantToAddSubTask = !this.wantToAddSubTask;
  }

  openOrSubmitForm(){
    this.wantToAddSubTask = !this.wantToAddSubTask;
  }

  reorderItems(event){
    this.task.subTasks = reorderArray(this.task.subTasks, event);
  }

  deleteItem(subTask: any){
    let deleledSubTastIndex = this.task.subTasks.indexOf(subTask);
    this.task.subTasks.splice(deleledSubTastIndex,1);
  }
  
  lineThroughTask(checkbox: Checkbox){
    let itemNumb : number = parseInt(checkbox.id[9]) - 3;
    const taskItem = document.getElementById("subItem"+itemNumb);
    taskItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    taskItem.style.backgroundColor= checkbox.checked ? "rgba("+38+","+194+","+129+","+0.5+")" : "white";
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}