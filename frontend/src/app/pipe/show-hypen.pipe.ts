import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showHypen'
})
export class ShowHypenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value != "null" && value != "undefined") {
      return value;
    } else {
      if (args) {
        return args;
      } else {
        return "-";
      }
    }

  }
}
