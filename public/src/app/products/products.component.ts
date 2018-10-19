import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

// const FgYellow = "\x1b[33m\x1b[1m",
//       makeTable = (arr, header = '.......┬─┬⃰͡ (ᵔᵕᵔ͜ )')=>{ console.log(header); console.table(arr); }



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css','../app.component.css']
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private _http: HttpService) { }
  ngOnInit() {  this.getProducts(); }


  getProducts=()=>this._http.getProducts()
        .subscribe( data=>this.products=data )
  

}
