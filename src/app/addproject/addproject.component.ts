import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import { ProjectserviceService } from '../projectservice.service';
import { Router } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private projectService:ProjectserviceService, private router:Router) { }
  addprojectdata:FormGroup;
  submitted=false;

  ngOnInit() 
  {
      this.addprojectdata= this.formBuilder.group({
      projectId:['',[Validators.required]],
      projectName:['',[Validators.required]],
      projectDiscription:['',[Validators.required]],
      projectStartDate:['',[Validators.required]],
      projectEndDate:['',[Validators.required]],
    })
  }

  createProject(project:Project)
  {
    console.log(project.projectName);
      this.projectService.addProject(project).subscribe(data=>{
      alert("Project Created successfully!")
      this.router.navigate(['/projects']);
    });
  }
  

  onClickSubmit(data):void{
  console.log(data);
  this.submitted=true;
  if(this.addprojectdata.invalid){
    return;
  }
  this.projectService.addProject(data);
  }

}
