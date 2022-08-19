import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingAreaComponent } from './components/listing-area/listing-area.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'login',component : LoginComponent },
  {path:'register',component : RegisterComponent },
  {path:'products/:productId',component: ProductDetailComponent  },
  {path:'products',component: ListingAreaComponent  },
  {path:'',redirectTo: 'products',pathMatch:'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
