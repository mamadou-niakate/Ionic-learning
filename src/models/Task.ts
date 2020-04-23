export class Task{
    name: string;
    subTasks: {title:string,isChecked:boolean}[]=[];
    isChecked: boolean;

    constructor(name: string,subTasks:[{title:string,isChecked:boolean}],isChecked:boolean)
    { 
        this.name = name;
        this.subTasks = subTasks;
        this.isChecked = isChecked;
    }
}