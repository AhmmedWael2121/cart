import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList:any[],text:string): any {
    return productList.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()));
  }

}
