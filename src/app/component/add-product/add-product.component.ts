import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Iproduct } from 'src/interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: Iproduct={
    name:"",
    price: 0
  }
  constructor(private service: ServiceService){}
  onHandleSubmit(){
    this.service.AddProduct(this.product).subscribe(product=>{
      this.product=product
    })
  }
}
