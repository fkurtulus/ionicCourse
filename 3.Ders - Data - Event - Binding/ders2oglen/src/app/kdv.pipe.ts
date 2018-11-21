import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: any): any {
    return value * 1.18;
  }

}
