import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Component } from '@angular/core';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{ title }}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Heroes']">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
    	HeroService
  	]
})

@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes', //must begin with capital letter to avoid confusion with path
		component: HeroesComponent
	},
	{
		path: '/dashboard',
		name: 'Dashboard', //must begin with capital letter to avoid confusion with path
		component: DashboardComponent,
		useAsDefault: true
	}

])

export class AppComponent { 
	title = 'Tour of Heroes';
}