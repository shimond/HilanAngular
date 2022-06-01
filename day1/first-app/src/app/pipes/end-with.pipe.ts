import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endWith'
})
export class EndWithPipe implements PipeTransform {

  transform(value: unknown, suffix = '!', count = 1): unknown {
    console.log('EndWithPipe invoked');
    return value + suffix.repeat(count);
  }

}
