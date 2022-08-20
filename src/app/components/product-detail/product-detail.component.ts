import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  product !: Product;
  imgFolderUrl: string= "/assets";

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productService.getProduct(data['productId']).subscribe(response => {
        this.product = response[0];
      });
    });

  }

}
