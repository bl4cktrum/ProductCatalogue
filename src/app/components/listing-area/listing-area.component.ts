import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  url: string='https://assignment-api.piton.com.tr/api/v1/product/all';
  accessToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzMjFAdG1haWwuY29tIiwiaWF0IjoxNjYwNzU5MTI1LCJleHAiOjE2ODY2NzkxMjV9.lem0XHzqH5vOlryn1VimVTll2piEeU43yqQMZuteFLM";
  

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    console.log("IM HERE");
    // let headers = new HttpHeaders().set('access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzMjFAdG1haWwuY29tIiwiaWF0IjoxNjYwNzU5MTI1LCJleHAiOjE2ODY2NzkxMjV9.lem0XHzqH5vOlryn1VimVTll2piEeU43yqQMZuteFLM');
    // this.http.get("https://assignment-api.piton.com.tr/api/v1/product/all",{headers});
    this.fetchData();
    console.log(this.mString);
  }

  private async fetchData(){
    let headers = new HttpHeaders()
    .set('Content-type','application/json')
    .set('access-token',this.accessToken);
    const data = await lastValueFrom(this.http.get(this.url,{headers}));
    console.log(JSON.stringify(data));
  }
}
