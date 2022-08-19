import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { lastValueFrom, tap } from 'rxjs';


@Component({
  selector: 'app-listing-area',
  templateUrl: './listing-area.component.html',
  styleUrls: ['./listing-area.component.css']
})
export class ListingAreaComponent implements OnInit {
  productList: Product[] = [];
  mString: string='first';
  apiUrl: string= "http://localhost:3000/";

  

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    console.log("IM HERE");
    this.fetchData();
    console.log(this.mString);
  }

  private async fetchData(){
    const data = await lastValueFrom(this.http.get(this.apiUrl+"products"));
    
  }
}
