import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProyectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProyectService]
})
export class ProjectsComponent implements OnInit {
	public title:string;
  public projects:Project;

  constructor(
  	private _proyectService:ProyectService,
  ){ 
  	this.title = "Proyectos";
  }

  ngOnInit(): void {
  	this.getProjects();
  }

  getProjects(){
		this._proyectService.getProjects().subscribe(
			response => {
        console.log(response);
        if(response.proyect){
          this.projects = response.proyect; 
        }
			},
			error=>{
				console.log(<any>error);
			}
		);
	}

}
