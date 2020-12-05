import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
	public url:string;

	constructor(){
		this.url= Global.url;
	}
	//Se realiza una peticion AJAX
	makeFileRequest(url:string, params:Array<string>, files:Array<File>, name:string){
		//ref(promise):https://angular.io/guide/comparing-observables
		return new Promise(function(resolve, reject){
			resolve=>{
				//Se define la peticion AJAX
				var formData:any = new FormData(); //Permite crear un formlario en un objeto
				//xhr es un sinonimo de AJAX
				var xhr = new XMLHttpRequest(); //Objeto de peticiones asincronas
				//Recorro lo archivos que llegen
				for(var i = 0; i<files.length; i++){
					//Se va recogiendo archivos y se guarda en "formData"
					formData.append(name, files[i], files[i].name);
				} 
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 ){//Valor predeterminado
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.response));
						}
						else{
							reject(xhr.response);
						}
					}
				}
				//Se hace la peticion por POST 
				xhr.open('POST',url, true);
				xhr.send(formData);	
			}
			reject=>{

			}
			
		})
	}

}