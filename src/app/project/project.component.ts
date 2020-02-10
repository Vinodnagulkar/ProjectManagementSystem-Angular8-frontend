import { Component, OnInit } from '@angular/core';
import { ProjectserviceService } from '../projectservice.service';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectserviceService,private router:Router) { }

  projectList:Project[];

  ngOnInit():void {
    this.projectService.getAllProjects().subscribe(data=>{
    this.projectList=data;
    console.log(this.projectList);
  });
   
  }


  routeWithData(project:Project)
  {
    console.log("--------------------->"+project.projectId,project.projectName);
    this.router.navigate(['/getproject', JSON.stringify(project)]);
  }

}
