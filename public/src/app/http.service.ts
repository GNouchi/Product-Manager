import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  // api service 

  getProducts=()=> 
    this._http.get('/api/products');

  getSingleProduct=(productid)=> 
    this._http.get('/api/products/'+productid);

  createProduct=(Product)=>
    this._http.post('/api/products', Product);

  deleteProduct=(productid)=>
    this._http.delete('/api/products/'+ productid);

  editProduct=( productid, editableProduct )=>
    this._http.put( '/api/products/'+productid, editableProduct );  




  // createRating=( productid, newrating )=>
  //   this._http.put( '/api/products/ratings/'+productid, newrating );  

}
