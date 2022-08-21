import { Component, NgZone, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-listing-area',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ProductService]
})
export class MainPageComponent implements OnInit {
  productList!: Product[];
  imgFolderUrl: string= "/assets";


  constructor(private productService: ProductService, private ngZone:NgZone) { 
    this.ngZone.run(() => {
      this.productService.getProducts().subscribe(response => {
        this.productList=response;
    });
  
    })
  }

  ngOnInit(): void {    
    
  }


}
