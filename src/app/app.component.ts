import { Component } from '@angular/core';
import { Iproduct } from 'src/interface/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Iproduct[] =[
    {id:1, name:"San pham 1", price: 200},
    {id:2, name:"San pham 1", price: 300},
    {id:3, name:"San pham 1", price: 400}
  ];
  title: string = 'projectAngular';
  name: string= "phuongle";
  age: number = 20;
  onHandleRemove(id:any){
    this.products = this.products.filter(item=> item.id !== id)
  }
}

