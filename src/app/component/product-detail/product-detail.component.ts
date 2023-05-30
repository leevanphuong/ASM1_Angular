import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Iproduct } from 'src/interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: Iproduct={
    name: "",
    price: 0
  }
  constructor(
    private router: ActivatedRoute, 
    private service: ServiceService
    ){
      this.router.paramMap.subscribe(param=>{
        const id =Number(param.get("id"))
        this.service.getOne(id).subscribe(product=>{
          this.product = product
        })
      })
    }
}
