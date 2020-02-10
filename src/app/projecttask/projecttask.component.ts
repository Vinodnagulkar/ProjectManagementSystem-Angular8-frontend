import { Component, OnInit } from '@angular/core';
import { Projecttaskinterface } from '../projecttaskinterface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-projecttask',
  templateUrl: './projecttask.component.html',
  styleUrls: ['./projecttask.component.css']
})
export class ProjecttaskComponent implements OnInit {

  constructor() { }
  
  addprojecttaskdata:FormGroup;

  ngOnInit() {
    this.addprojecttaskdata=new FormGroup({
      title: new FormControl("",Validators.compose([Validators.required])),
      description:new FormControl("",Validators.compose([Validators.required]))
    })
  }

  projectTaskList:Projecttaskinterface[]=[
    {
      title:'User management',description:'Add,update,delete,list users'
    },
    {
      title:'project management',description:'Add,update,delete,list project'
    },
    {
      title:'admin',description:'Add,update,delete,list admin'
    }
]

opentask(projecttask:Projecttaskinterface){
console.log("------------------->"+projecttask.title);
}

addprojecttask(projecttask)
{
  console.log("------------------->"+projecttask.title);
  this.projectTaskList.push(projecttask);
}
 
}
