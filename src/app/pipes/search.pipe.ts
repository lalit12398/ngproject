import { Pipe } from '@angular/core';

@Pipe({name: 'userSearch'})
export class Search{
    transform(value: any[], searchVal: string){
        let searchResult = value.filter(point => {
            let searchValLower = searchVal.toLowerCase();
            let stringValue = JSON.stringify(point).toLowerCase();
            return stringValue.includes(searchValLower);
        });
        return searchResult;
    }
}