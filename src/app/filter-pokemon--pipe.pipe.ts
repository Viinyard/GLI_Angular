import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any, property?: string, searchVar?: any): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return String(e[property]).toLowerCase().indexOf(String(searchVar).toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
