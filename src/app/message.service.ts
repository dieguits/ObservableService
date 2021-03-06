import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MessageService {

	private _listners = new Subject<any>();
	private _listnersprocess = new Subject<any>();

	constructor() { }

	listenprocess(): Observable<any> {
		return this._listnersprocess.asObservable();
	}

	sendprocess(params: any) {
		this._listnersprocess.next(params);
	}
}
