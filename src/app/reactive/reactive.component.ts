// 响应式编程
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/from'
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

/*流做的三件事:
1、from（[1,2,3,4]）
发射下一个元素: 元素可以是任何东西类型 => 取决于流的源头 本例为数字类型的数组
fromEvent()  流的源头发射的就是一个事件
2、流可以抛一个异常
3、发射一个信号告诉观察者流已经结束

观察者可以定义三个方法处理 流
1、处理流中发射出来的元素
2、处理流中的异常（可选）
3、在流结束的时候被调用（可选）
*/

/*
FormControl 处理表单事件
当input输入框的值发生变化时 serachInput 对象就会发射一个叫valueChanges(被观察者即 流)的事件

然后就可以订阅这个事件
*/
	serachInput:FormControl = new FormControl()
	constructor() {
		/**订阅input框 */

		this.serachInput.valueChanges
		.debounceTime(500) // 停留500ms
		.subscribe(
			stockCode => this.getStockInfo(stockCode)
		)
		// Observable.from([1, 2, 3, 4]) // 创建一个数组流 （被观察者）
		// 	.filter(e => e % 2 == 0) // 过滤偶数
		// 	.map(e => e * e) // 映射流
		// 	.subscribe( // 订阅 （观察者）
		// 		e => console.log(e),
		// 		err => console.error(err), // 可选
		// 		() => console.log("流结束了") // 可选
		// 	)
	}

	onKey(event){
		console.log(event.target.value)
		// event.target 指向发射事件的HTML元素
	}

	onKeyFilder(event){
		console.log(event)
	}

	getStockInfo(stockCode:string){
		console.log(stockCode)
	}
	ngOnInit() {

	}

}
