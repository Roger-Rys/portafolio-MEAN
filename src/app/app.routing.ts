import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //CLI imports AppRoutingModule

//Component
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component'


// sets up routes constant where you define your routes
const routes: Routes=[
	{path:"", component: AboutMeComponent},
	{path:"sobre-mi", component: AboutMeComponent},
	{path:"proyectos", component: ProjectsComponent},
	{path:"crear-proyectos", component: CreateComponent},
	{path:"contactos", component: ContactComponent},
	{path:"**", component: ErrorComponent},
];

// configures NgModule imports and exports
@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule{

}