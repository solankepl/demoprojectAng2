import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortinglist'
})
export class SortinglistPipe implements PipeTransform {

      transform(records: Array<any>, args?: any) {
        return records.sort(function(a, b){
            if(a[args.property] < b[args.property]){
                return -1 * args.direction;
            }
            else if( a[args.property] > b[args.property]){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
        });
    };

}
