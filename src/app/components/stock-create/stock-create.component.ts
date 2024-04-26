import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrl: './stock-create.component.scss'
})
export class StockCreateComponent implements OnInit{
  
  formProduct!: FormGroup;

  initForm() {

    // format date "2024-04-26T00:00:00"
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    const dateNow = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`

    this.formProduct = new FormGroup({
      productName: new FormControl('', Validators.required),
      unitPrice: new FormControl('', Validators.required),
      unitInStock: new FormControl('', Validators.required),
      categoryID: new FormControl('', Validators.required),
      // productPicture: new FormControl(''),
      createdDate: new FormControl(dateNow, Validators.required),
      modifiedDate: new FormControl(dateNow, Validators.required),
    });
  }
  
  constructor(
    private http: ProductService
  ) {}

  ngOnInit() {
    this.initForm()
  }

  onSubmit() {
    if (this.formProduct.invalid) {
      return;
    } else {
      
      // สร้าง object ชื่อ formData และกำหนดค่าเป็น new FormData()
      const formData: any = new FormData()

      // วนลูปดูค่าที่อยู่ใน formProduct
      for (let key in this.formProduct.value) {
        formData.append(key, this.formProduct.value[key])
      }

      // วนลูปดูค่าที่อยู่ใน formData
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      this.http.createProduct(formData).subscribe({
        next: (data) => {
          console.log(data);
          alert('Product created successfully');
          this.formProduct.reset();
        },
        error: (error) => {
          console.error(error);
          alert('An error occurred while creating the product');
        }
      })

    }
  }

}
