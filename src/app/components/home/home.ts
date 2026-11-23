import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { Categories } from '../categories/categories';
import { Products } from '../products/products';
import { Promotion } from '../promotion/promotion';

@Component({
  imports: [Banner, Categories, Products, Promotion],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
