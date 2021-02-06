import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(content: string, limit: number): string {
    return content.length > limit ? content.substr(0, limit) : content;
  }

}
