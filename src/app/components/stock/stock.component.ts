import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit {

  displayedColumns = ['productId', 'image', 'name', 'price', 'stock', 'action']

  // sample datasource
  dataSource = {
    data: [
      { productId: 1, image: 'image1', name: 'name1', price: 100, stock: 10 },
      { productId: 2, image: 'image2', name: 'name2', price: 200, stock: 20 },
      { productId: 3, image: 'image3', name: 'name3', price: 300, stock: 30 },
      { productId: 4, image: 'image4', name: 'name4', price: 400, stock: 40 },
      { productId: 5, image: 'image5', name: 'name5', price: 500, stock: 50 },
      { productId: 6, image: 'image6', name: 'name6', price: 600, stock: 60 },
      { productId: 7, image: 'image7', name: 'name7', price: 700, stock: 70 },
      { productId: 8, image: 'image8', name: 'name8', price: 800, stock: 80 },
      { productId: 9, image: 'image9', name: 'name9', price: 900, stock: 90 },
      { productId: 10, image: 'image10', name: 'name10', price: 1000, stock: 100 }
    ],
    filter: ''
  }

  searchValue = ''
  searchTerm = new Subject<string>()

  constructor() {}
  ngOnInit(): void {}

  async doFilter(event: any) {
    // do local
    // this.dataSource.filter = event.target.value.trim();
    // do remote
    // this.dataSource.data = await lastValueFrom(
    //   this.rest.getProductByKeyword(event.target.value)
    // );
  }

  onClickDelete(row: any) {
    // do remote
    // this.dataSource.data = await lastValueFrom(
    //   this.rest.deleteProduct(this.selectedProduct)
    // );
  }

  clearSearch() {
    this.searchValue = '';
    this.searchTerm.next('');
  }

}