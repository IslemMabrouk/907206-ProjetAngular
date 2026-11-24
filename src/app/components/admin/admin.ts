import { Component } from '@angular/core';
import { UsersTable } from '../users-table/users-table';
import { ProductsTable } from '../products-table/products-table';
import { OrdersTable } from '../orders-table/orders-table';

@Component({
  imports: [UsersTable, ProductsTable, OrdersTable],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
