import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(arraySearch: any[], inputText: string = ''): any[] {
    if(!arraySearch || inputText === ''){
      return arraySearch;
    }
    const text = inputText.trim().toLocaleLowerCase();
    return arraySearch.filter( item => 
        item.title.toLocaleLowerCase().includes(text)
    )
  }

}
