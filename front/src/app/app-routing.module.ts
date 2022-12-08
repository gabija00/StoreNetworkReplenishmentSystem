import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardOwnerComponent } from './board-owner/board-owner.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'moderator', component: BoardModeratorComponent },
  { path: 'owner', component: BoardOwnerComponent },
  { path: 'create-shop', component: CreateShopComponent },
  { path: 'create-department', component: CreateDepartmentComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'create-shop/:id', component: CreateShopComponent },
  { path: 'create-department/:id', component: CreateDepartmentComponent },
  { path: 'create-product/:id', component: CreateProductComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'department-details/:id', component: DepartmentDetailsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'shop-details/:id', component: ShopDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
