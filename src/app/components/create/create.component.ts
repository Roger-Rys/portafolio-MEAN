import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProyectService } from '../../services/project.service';
//Import the service upload
import { UploadService } from '../../services/upload.service';
//Global
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProyectService, UploadService]
})
export class CreateComponent implements OnInit {
	public title:string;
  public status:string;
	public project: Project;
  public fileToLoad:Array<File>;


  constructor(
  	private _projectService:ProyectService,
    private _updateService:UploadService
  ) { 
  	this.title = "Crear proyecto";
  	this.project = new Project("","","","","",2020,"");
  }

  ngOnInit(): void {
  }

  onSubmit(Form){
    //ref(subcribe): https://angular.io/api/core/EventEmitter#methods
  	this._projectService.saveProject(this.project).subscribe(
        response=>{
          if(response.project){
            
            //upload image
            //makeFileRequest(url, params, files, name)
            this._updateService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.fileToLoad, 'image')
            .then((result:any)=>{
              console.log(result);
              //Is successful if the formulary and the file are upload
                this.status = "success";

                Form.reset();//Borra el contenido del input
            });

          }else{
            this.status = "failed";
          }
        },
        error=>{
          console.log(<any>error);
        }
      );
  }

  fildChangeEvent(event:any){
    this.fileToLoad = <Array<File>>event.target.files;
  }

}
