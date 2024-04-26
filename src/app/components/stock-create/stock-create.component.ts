import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrl: './stock-create.component.scss'
})
export class StockCreateComponent implements OnInit{
  
  formProduct!: FormGroup;

  initForm() {
    this.formProduct = new FormGroup({
      productName: new FormControl('', Validators.required),
      unitPrice: new FormControl('', Validators.required),
      unitInStock: new FormControl('', Validators.required),
      categoryID: new FormControl('', Validators.required),
      productPicture: new FormControl('', Validators.required),
      createdDate: new FormControl(Date.UTC, Validators.required),
      modifiedDate: new FormControl(Date.UTC, Validators.required),
    });
  }
  
  constructor() {}

  ngOnInit() {
    this.initForm()
  }

  onSubmit() {
    if (this.formProduct.invalid) {
      return;
    } else {
      console.log(this.formProduct.value);
    }
  }

}
