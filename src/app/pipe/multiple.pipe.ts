import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

	transform(value: number, args?: number): any {
		/**两个参数分别为： 原始值和参数  */
		if (!args) {
			args = 1;
		}
		return value * args;
	}

}
