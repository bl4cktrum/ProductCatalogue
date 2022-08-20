import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Product } from '../models/product-model';
import { Observable, tap, catchError, throwError, Subject } from 'rxjs';
import { Params } from '@angular/router';

@Injectable()
export class ProductService {
  apiUrl: string= "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+"product").pipe(
      tap(response => {console.log("get request is ok");
      }),
      catchError(throwError)
    )
  }
  getProduct(productId:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+"product?id="+productId).pipe(catchError(throwError))
  }
}
