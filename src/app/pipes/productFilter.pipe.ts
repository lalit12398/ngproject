import { Pipe } from '@angular/core';

@Pipe({name: 'productFilter'})
export class ProductFilter {
    transform(value: any[], priceFilterValue: string , colorFilterValue: string, searchValue: string){
        let filteredList = value;
        if(priceFilterValue != "" && priceFilterValue != undefined){
            if(priceFilterValue === "lowToHigh"){
                filteredList = value.sort((a,b)=>{
                    return a.price - b.price;
                });
            }else if(priceFilterValue === "highToLow"){
                filteredList = value.sort((a,b) => {
                    return b.price - a.price;
                });
            }else if(priceFilterValue === "none") return value;
        }
        if(colorFilterValue != "" && colorFilterValue != undefined){
            filteredList = value.filter(point => {
                return point.color === colorFilterValue;
            });
        }
        if(searchValue != "" && searchValue != undefined){
            filteredList = value.filter(point => {
                let valueToStr = JSON.stringify(point).toLowerCase();
                return valueToStr.includes(searchValue); 
            })
        }
        return filteredList;

        // if(!searchValue) return value;
        // if(searchValue){
        //      return value.filter(data =>{
        //         return JSON.stringify(data).toLowerCase().includes(searchValue.toLowerCase());
        //     })
        // }
    }
}