import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable()
export class ProductService {
  apiUrl: string= "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+"product").pipe(
      tap(response => {console.log(JSON.stringify(response));
      }),
      catchError(throwError)
    )
  }

}
