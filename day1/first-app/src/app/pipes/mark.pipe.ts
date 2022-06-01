import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('PIPE isItemNeedToMark');
    return value.includes('5') && value.length > 5;
  }

}
