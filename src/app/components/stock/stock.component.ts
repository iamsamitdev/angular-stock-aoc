import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { ProductService } from '../../services/product.service'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit {

  displayedColumns = [
    'productID', 
    'productPicture', 
    'productName', 
    'unitPrice', 
    'unitInStock', 
    'action'
  ]

  // Image URL
  imageUrl = environment.dotnet_api_url_image

  dataSource = {
    data: [],
    filter: ''
  }

  searchValue = ''
  searchTerm = new Subject<string>()

  constructor(
    private http: ProductService
  ) {
  }

  ngOnInit(): void {
    this.http.getAllProducts().subscribe({
      next: (result) => {
        // console.log(result)
        this.dataSource.data = result.data
        // console.log(this.dataSource.data)
      },
      error: (error) => {
        console.error(error)
      },
    })
    
  }

  async doFilter(event: any) {
    // do local
    // this.dataSource.filter = event.target.value.trim();
    // do remote
    // this.dataSource.data = await lastValueFrom(
    //   this.rest.getProductByKeyword(event.target.value)
    // );
  }

  onClickDelete(row: any) {
    // console.log(row)
    this.http.deleteProduct(row).subscribe({
      next: (result) => {
        console.log(result)
        this.dataSource.data = this.dataSource.data.filter((product: any) => product.productID !== row)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  clearSearch() {
    this.searchValue = '';
    this.searchTerm.next('');
  }

}