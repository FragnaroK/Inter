import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toGB',
})
export class ToGBPipe implements PipeTransform {
  transform(value: number): string {
    // Transform MB to GB
    return (value * 0.001).toString().slice(0, 5);
  }
}
