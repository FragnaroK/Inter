import { Pipe, PipeTransform } from '@angular/core';
import { ToGBPipe } from './to-gb.pipe';

@Pipe({
  name: 'getPercent',
})
export class GetPercentPipe implements PipeTransform {
  transform(value: number, total: number): number {
    // Transform GB to Percentaje
    const toGB = new ToGBPipe();

    /* Transform data to GB an then do the calc to get percentaje */
    let newValue = parseFloat(toGB.transform(value).toString().slice(0, 4));
    let newTotal = parseFloat(toGB.transform(total).toString().slice(0, 4));

    return (newValue / newTotal) * 100;
  }
}
