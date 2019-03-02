import { Component } from '@angular/core';

@Component({
    selector: "app-products",
    templateUrl: "products.component.html",
})
export class ProductsComponent{
    priceFilter: any;
    colorFilter: any;
    searchValue: any;
    productList: any = [
        {name: "Blue Jeans", material: "Denim", imagePath: "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_581,q_85,w_581/v1/i/f725922f_538f.jpg", color: "blue", price: 2000},
        {name: "Light Blue Jeans", material: "Cotton", imagePath: "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_581,q_85,w_581/v1/i/f725922f_538f.jpg", color: "cyan", price: 1000},
        {name: "Yellow Jeans", material: "Denim", imagePath: "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_581,q_85,w_581/v1/i/f725922f_538f.jpg", color: "yellow", price: 2500},
        {name: "Green Jeans", material: "Cotton", imagePath: "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_581,q_85,w_581/v1/i/f725922f_538f.jpg", color: "green", price: 2200},
        {name: "Shirt", material: "Denim", imagePath: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Primitive-Dirty-P-Cyan-Blue-Polo-Shirt-_274063-front-US.jpg", color: "blue", price: 2100},
        {name: "Blue Shirt", material: "Cotton", imagePath: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Primitive-Dirty-P-Cyan-Blue-Polo-Shirt-_274063-front-US.jpg", color: "cyan", price: 1300},
        {name: "Yellow Shirt", material: "Denim", imagePath: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Primitive-Dirty-P-Cyan-Blue-Polo-Shirt-_274063-front-US.jpg", color: "blue", price: 1700},
        {name: "Green Shirt", material: "Cotton", imagePath: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Primitive-Dirty-P-Cyan-Blue-Polo-Shirt-_274063-front-US.jpg", color: "green", price: 2000},
        {name: "Cyan Shirt", material: "Denim", imagePath: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Primitive-Dirty-P-Cyan-Blue-Polo-Shirt-_274063-front-US.jpg", color: "cyan", price: 1700},
        {name: "Jacket", material: "Leather", imagePath: "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8c3bd24c/images/hi-res/84212_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png", color: "blue", price: 1500},
        {name: "Blue Jacket", material: "Denim", imagePath: "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8c3bd24c/images/hi-res/84212_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png", color: "blue", price: 2500},
        {name: "Green Jacket", material: "Leather", imagePath: "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8c3bd24c/images/hi-res/84212_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png", color: "green", price: 2600},
        {name: "Black Jacket", material: "Denim", imagePath: "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8c3bd24c/images/hi-res/84212_BLK.jpg?sw=750&sh=750&sm=fit&sfrm=png", color: "black", price: 2700},
    ]
}