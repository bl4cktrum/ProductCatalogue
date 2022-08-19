import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-listing-area',
  templateUrl: './listing-area.component.html',
  styleUrls: ['./listing-area.component.css'],
  providers: [ProductService]
})
export class ListingAreaComponent implements OnInit {
  productList: Product[] = [];
  mString: string='first';
  imgFolderUrl: string= "/assets";


  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
      this.productList=response;
    });
  }

  // private async fetchData(){
  //   const data = await lastValueFrom(this.http.get(this.apiUrl+"products"));
  // }
}
