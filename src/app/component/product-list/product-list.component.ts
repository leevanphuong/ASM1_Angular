import { Component } from '@angular/core';
import { Iproduct } from 'src/interface/product';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Iproduct[]=[]
  constructor(private service:ServiceService ){
    this.service.getAll().subscribe(data=>{
      this.products= data
    }, error => console.log(error))
  }
  removeItem(id:any){
    this.service.Remove(id).subscribe(()=>{
      this.products= this.products.filter(item=> item.id !=id)
    })
  }
}
