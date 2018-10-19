import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css','../app.component.css']
})
export class EditproductComponent implements OnInit {
  product:any
  prodid:string
  errors:any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,) { }
  ngOnInit() { this.setProdId() }
   
  getProduct=()=> this._http.getSingleProduct(this.prodid)
      .subscribe( data => this.product=data )
  
      
  setProdId=()=>  this._route.params.subscribe(
          (params: Params) =>{
            this.prodid=params['id'];
            this.getProduct();
           })

  editProduct=()=> this._http.editProduct(this.prodid,this.product)
          .subscribe( data => (data['errors']) ?this.errors = data:this.getProduct()  )


}
