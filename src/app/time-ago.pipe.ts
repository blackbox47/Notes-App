import { Pipe, PipeTransform } from '@angular/core';
import HandyTimeAgo from 'handy-timeago';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(time: number): string {
    return HandyTimeAgo(time);
  }

}
