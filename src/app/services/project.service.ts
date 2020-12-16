//en app.modulo se debe importar el modulo http
import { Injectable } from "@angular/core";
//este import permite hacer peticiones AJAX y modificar cabeceras
import {  HttpClient, HttpHeaders} from '@angular/common/http';
//el observable recojera las informacion del apirest 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//importamos el proyecto
import { Project } from '../models/projects';
//Importar fichero glabal
import { Global } from './global';

@Injectable()
export class ProyectService{
	public url:String;
	
	//Con esto ya puedo hacer peticiones AJAX 
	constructor(private _http:HttpClient){
		this.url = Global.url;
	} 
	testService():String{
 		return 'Testing of service angular';
	}


	/** POST: add a new projects to the database */
	saveProject(projects:Project):Observable<any>{
		//ref: https://angular.io/guide/http#making-a-post-request
		let params= JSON.stringify(projects);
		//ref(header): https://angular.io/guide/http#adding-headers
		const httpOptions = {headers: new HttpHeaders({"Content-type": "application/json"})};
		
		return this._http.post(this.url+"save-project", params, httpOptions);		
	}


	//Obtain the projects
	getProjects():Observable<any>{
		const httpOptions = {headers: new HttpHeaders({"Content-type": "application/json"})};		
		return this._http.get(this.url+"projects",httpOptions);
	}	
}