import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products-table',
  styleUrl: './products-table.css',
  templateUrl: './products-table.html',
})
export class ProductsTable {

  // constructor(private router:Router){}
  private router = inject(Router);
  isConnected:boolean=true;

  productsTab:any[]=[
    {
      id:1, name:"Produit 1", description : "description du produit 1", price:20
    },
    {
      id:2, name:"Produit 2", description : "description du produit 2", price:50
    }, 
    {
      id:3, name:"Produit 3", description : "description du produit 3", price:15
    },
    {
      id:4, name:"Produit 4", description : "description du produit 4", price:10
    }
  ];


  display(id:any){
    this.router.navigate(["/productInfo"]);
  }

  goToEdit(id:any){
    this.router.navigate(["/editProduct"]);
  }

  deleteproduct(id:any){
    console.log("Produit supprimé!");
  }
}
