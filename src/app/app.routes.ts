import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { AddProduct } from './components/add-product/add-product';
import { Admin } from './components/admin/admin';
import { ProductInfo } from './components/product-info/product-info';
import { Signup } from './components/signup/signup';
import { Signin } from './components/signin/signin';

export const routes: Routes = [
    { path: "", component:Home},
    { path: "products", component:Products},
    { path: "about", component:About},
    { path:"addProduct", component:AddProduct},
    { path:"admin", component:Admin},
    { path:"productInfo", component:ProductInfo},
    { path:"editProduct", component:AddProduct},
    { path:"signup", component:Signup},
    { path:"signin", component:Signin}
];
