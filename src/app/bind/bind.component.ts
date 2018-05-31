import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bind',
	templateUrl: './bind.component.html',
	styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

	constructor() { 
		setTimeout(() => {
			this.divClass = "a b c";
		}, 2000);
	}
	imgUrl:string = "http://placehold.it/400x220"
	asd:boolean = false
	size:number = 2
	divClass:string;
	isBig:boolean = true
	changeClass:any = {
		a:false,
		b:true,
		c:false
	};
	isDev:boolean = false;


	isStyle:any = {
		color: 'blue',
		background: 'orange'
	}
	ngOnInit() {
		
	}

	doOnInput(event:any) {
		console.log(event.target.value) // dom 属性
		console.log(event.target.getAttribute('value')) // html属性
	}
}
