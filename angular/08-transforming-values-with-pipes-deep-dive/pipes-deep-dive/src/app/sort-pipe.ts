import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: 'ASC' | 'DESC' = 'ASC') {
    const sorted = [...value];

    sorted.sort((a, b) => {
      if (direction === 'ASC') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });

    return sorted;
  }
}
