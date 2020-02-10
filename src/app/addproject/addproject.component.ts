import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ProjectserviceService } from '../projectservice.service';
import { Router } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private projectService:ProjectserviceService, private router:Router) { }
  addprojectdata:FormGroup;

  ngOnInit() 
  {
      this.addprojectdata= new FormGroup({
      projectId:new FormControl("",Validators.compose([Validators.required])),
      projectName: new FormControl("", Validators.compose([Validators.required])),
      projectDiscription: new FormControl("", Validators.compose([Validators.required])),
      projectStartDate: new FormControl("",Validators.compose([Validators.required])),
      projectEndDate: new FormControl("",Validators.compose([Validators.required])),
    })
  }

  createProject(project:Project)
  {
    console.log(project.projectName);
      this.projectService.addProject(project).subscribe(data=>{
      alert("Project Created successfully!")
      this.router.navigate(['dashboard/projects']);
    });
  }
  

  onClickSubmit(data):void{
  console.log(data);
  this.projectService.addProject(data);

  }

}
