import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

	public languaje: string;

	constructor(private service: MessageService) {

		this.service.listenprocess().subscribe((m: any) => {
			// if (m != null && m != undefined)
				this.languaje = m;
		});
	}

	ngOnInit() {}

	tratarValor() {
		if(this.languaje)
		this.languaje += ' Now we can use the variable.';
	}


}
