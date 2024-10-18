import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe  implements PipeTransform {
  readonly datePipe = new DatePipe('en-US');

  constructor(){
    console.log('datePipe initialized');
  }

  transform(value: string | Date, format: string = 'MMM YYYY'): string | null {
    if (!value) {
      return null;
    }

    let date: Date;
    if (typeof value === 'string') {
      date = new Date(value);
    } else {
      date = value;
    }

    return this.datePipe.transform(date, format);
  }
}
