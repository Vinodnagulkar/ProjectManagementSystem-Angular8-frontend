import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectserviceService } from '../projectservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-projectdiscription',
  templateUrl: './projectdiscription.component.html',
  styleUrls: ['./projectdiscription.component.css']
})
export class ProjectdiscriptionComponent implements OnInit {
  
  public isActive:boolean = false;

  constructor(private router:ActivatedRoute, private route:Router, private projectService:ProjectserviceService ) { 
   
  }
  
project: Project = new Project();

  id:number;
  
  ngOnInit() {
    this.id= +this.router.snapshot.params["pid"];
    this.getProjectById(this.id);
  }
 

  updateProject(pid:number)
  {
    
    console.log("@@@@@@@@@@@@@ "+pid)
    //this.route.navigate(['updateproject']);
  }

  createProject(project:Project)
  {
    console.log(project.projectName);
      this.projectService.addProject(project).subscribe(data=>{
      //alert("Project Created successfully!")
      this.route.navigate(['/projects']);
    });
  }

  deleteProject(pid:number){
    console.log("------------>"+pid);
    this.projectService.deleteProjectById(pid).subscribe(data=>{
      alert("Project deleted successfully!");
      this.route.navigate(['/projects']);
    });
  }

getProjectById(id:number)
{
 this.projectService.getProjectById(id).subscribe(data=>{
 this.project = JSON.parse(JSON.stringify(data));
},
  err => {
    console.log(err, '--------------------------------------', this.project);
  }
);
}


backToDiscription()
{
  this.route.navigate(['/project']);
}

}
