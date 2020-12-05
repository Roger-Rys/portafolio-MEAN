import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
	public title:string;
	public subtitle:string;
	public email:string;


  constructor() {
  	this.title = "Roger Reyes";
  	this.subtitle = "Desarrollador Web";
  	this.email =  "roger.reyesm97@gmail.com";
   }

  ngOnInit(): void {
  }

}
