import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-listing-area',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ProductService]
})
export class MainPageComponent implements OnInit {
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
}
