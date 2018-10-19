import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css','../app.component.css']
})
export class NewproductComponent implements OnInit {
  newproduct:{
      'title':string,
      'price':number,
      'url':string
    }
  errors: any
  constructor( 
    private _router: Router,
    private _http: HttpService,) { }
  ngOnInit() { this.clearForm(); }
  toLanding=()=> this._router.navigate(['/landing']);
  clearForm=()=> this.newproduct={'title':'','price':null,'url':''}

  toProducts=()=> {
    this.clearForm();
    this._router.navigate(['/products']);
  } 

  createProduct=()=>  this._http.createProduct(this.newproduct)
    .subscribe(data => (data['errors'])?this.errors = data:this.toProducts() )


}

