import { Injectable } from '@angular/core';
import { Project } from './project';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  id:string;
  constructor(private http:HttpClient,private router:Router) { }

  projectList:Project[];

getAllProjects():Observable<Project[]>{
  console.log(this.projectList);
  return this.http.get<Project[]>('http://localhost:8082/pms/project/getAllProjects');
}

addProject(project:object):Observable<object>{
  console.log(project);
  //this.projectList.push(project);------for static data

  return this.http.post<Project>('http://localhost:8082/pms/project/addProject/',project);
}

deleteProjectById(id:number)
{

  return this.http.delete('http://localhost:8082/pms/project/deleteProject/'+id);
  //this.projectList.splice(this.projectList.indexOf(deletedproject),1);------this is for static data
  //this.router.navigate(['dashboard/projects']);-----for static data
}

getProjectById(id:number):Observable<object>{
  return this.http.get('http://localhost:8082/pms/project/getProjectById/'+id);
}
}
