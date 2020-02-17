import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	title = 'observable';
	public valorcito:string;

	constructor(private service: MessageService) { }

	ngOnInit(): void {

	}

	hagamosle() {
		// console.log(this.valorcito)
		this.service.sendprocess(this.valorcito);
	}

}
