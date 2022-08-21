import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'login',component : LoginComponent },
  {path:'login/register',redirectTo: 'register', pathMatch:'full'},
  {path:'register',component : RegisterComponent },
  {path:'product/:productId',component: ProductDetailComponent, canActivate: [AuthGuard]},
  {path:'',component: MainPageComponent , canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
