import { Injectable } from '@angular/core';

// Import HttpClient and HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http'

// Import Observable
import { Observable } from 'rxjs';

// Import Product Model
import { ProductModel } from '../models/product.model'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = environment.dotnet_api_url

  // Read token from Local Storage
  token = localStorage.getItem('LoggedInToken')

  // Header for GET, DELETE
  httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+ this.token ?? ''
    })
  }

  // Header for POST, PUT
  httpOptionsPost  = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+ this.token ?? ''
    })
  }

  constructor(private http: HttpClient) { }

  // CRUD Methods ----------------------------------------------------
  // Get All Products
  getAllProducts(): Observable<any> {
    return this.http.get<any>(
      this.apiURL + 'Product', 
      this.httpOptions
    )
  }

  // Get Product By ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(
      this.apiURL + 'Product/' + id, 
      this.httpOptions
    )
  }

  // Create Product
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(
      this.apiURL + 'Product', 
      product, 
      this.httpOptionsPost
    )
  }

  // Update Product
  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(
      this.apiURL + 'Product/' + product.productID, 
      product, 
      this.httpOptionsPost
    )
  }

  // Delete Product
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(
      this.apiURL + 'Product/' + id, 
      this.httpOptions
    )
  }
}
