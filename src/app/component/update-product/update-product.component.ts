import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Iproduct } from 'src/interface/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product: Iproduct={
    name:"",
    price:0  
  }
  constructor(private service: ServiceService, private router: ActivatedRoute){
    this.router.paramMap.subscribe(param=>{
      const id= Number(param.get('id'))
      this.service.getOne(id).subscribe(product=>{
        this.product= product
      })
    })
  }
  onHandleSubmit(){
    this.service.updateProduct(this.product).subscribe(product=>{
      this.product= product
    })
  }
}
