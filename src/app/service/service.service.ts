import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/interface/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http :HttpClient) {}

  getAll():Observable <Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products`)
  }
  getOne(id:number):Observable <Iproduct>{
   return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  Remove(id:number):Observable <Iproduct>{
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`)
   }
   updateProduct(product:Iproduct):Observable<Iproduct>{
    return this.http.put<Iproduct>(`http://localhost:3000/products/${product.id}`, product)
   }
   AddProduct(product:Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>(`http://localhost:3000/products`,product)
   }
}
