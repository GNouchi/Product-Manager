import { Component, OnInit,Input  } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css','../app.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any
  
  constructor(
      private _router: Router,
      private _http: HttpService,
      private _products: ProductsComponent,
      ) { }

  ngOnInit() { }
  toLanding=() => this._router.navigate(['/landing']);
  toProducts=() => this._router.navigate(['/products']);
  toEditProduct=()=> this._router.navigate([('/products/edit/'+this.product['_id'])]);  
  deleteProduct=()=> this._http.deleteProduct(this.product['_id'])
      .subscribe(()=>this._products.getProducts());
        


}
