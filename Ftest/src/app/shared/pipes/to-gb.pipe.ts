import { Pipe, PipeTransform } from '@angular/core';
import { round } from 'lodash';

@Pipe({
  name: 'toGB',
})
export class ToGBPipe implements PipeTransform {
  transform(value: number): string {
    // Transform MB to GB
    return round(value * 0.001)
      .toString()
      .slice(0, 3);
  }
}
