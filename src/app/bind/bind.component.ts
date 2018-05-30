import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bind',
	templateUrl: './bind.component.html',
	styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

	constructor() { }
	imgUrl: string = "http://placehold.it/400x220"
	asd:boolean = true
	ngOnInit() {

	}
	doOnInput(event:any) {
		console.log(event.target.value) // dom 属性
		console.log(event.target.getAttribute('value')) // html属性
	}
}
