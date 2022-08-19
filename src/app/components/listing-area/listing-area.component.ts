import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-listing-area',
  templateUrl: './listing-area.component.html',
  styleUrls: ['./listing-area.component.css']
})
export class ListingAreaComponent implements OnInit {
  productList: Product[] = [];
  mString: string='first';
  apiUrl: string= "http://localhost:3000/";
  imgFolderUrl: string= "/assets";


  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    console.log("IM HERE");
    // this.fetchData();
    this.http.get<Product[]>(this.apiUrl+"products").subscribe(response => {
      this.productList=response;
      console.log(this.productList);
      
    }
    );

  }

  // private async fetchData(){
  //   const data = await lastValueFrom(this.http.get(this.apiUrl+"products"));
  // }
}
