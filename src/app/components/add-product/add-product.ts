import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-product',
  styleUrl: './add-product.css',
  templateUrl: './add-product.html',
})
export class AddProduct {

  products:any[]=[];
  product:any={};

  addProduct(productForm:NgForm){
    console.log(this.product);

    // Ajouter le nouveau produit
    this.products = JSON.parse(localStorage.getItem("productsList") || "[]") ;
    this.products.push(this.product);
    localStorage.setItem("productsList", JSON.stringify(this.products));
    alert("Produit ajouté!");
    productForm.resetForm();
    
  }
}
