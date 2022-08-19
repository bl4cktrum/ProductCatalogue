import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AuthState } from './auth/auth.state';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingAreaComponent } from './components/listing-area/listing-area.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListingAreaComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AuthState]),    //AuthState yazınca patlıyor
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
