import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-banner',
  styleUrl: './banner.css',
  templateUrl: './banner.html',
})
export class Banner {

  titre :any = "Bienvenue sur myShop";
  x!:number;
  y:boolean=true;

  somme(a:number,b:number){
   return a+b
  };

}
