import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Component } from '@angular/core';  // Does not work without this
import { AppComponent } from './app.component';

@NgModule({
	imports: [
	BrowserModule,
	FormsModule
	],
	declarations: [
	  AppComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

export class Hero {
	id: number;
	name: string;
	ego: string;
	story: string;
}
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    		   <h2>{{hero.name}}</h2>
               <div>
                 <label>Id: </label>{{hero.id}}</div>
	               <div>
	                 <label>Name: </label>
	                 <input [(ngModel)]="hero.name"
						  (ngModelChange)="hero.name=$event" placeholder="name">
	                </div>`
})
export class AppComponent { 
  title = 'New Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    ego: 'Jane Mui',
    desc: 'A mysterious young asian woman.'
  };
  hero2: Hero = {
    id: 2,
    name: 'Mindstorm',
    ego: 'Sara Colfax',
    desc: 'A mysterious young black woman.'
  };
}
