import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardOwnerComponent } from './board-owner/board-owner.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    BoardOwnerComponent,
    CreateShopComponent,
    CreateDepartmentComponent,
    CreateProductComponent,
    DepartmentListComponent,
    ProductListComponent,
    ShopDetailsComponent,
    DepartmentDetailsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
