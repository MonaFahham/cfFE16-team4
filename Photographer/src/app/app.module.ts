import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { AwardsComponent } from './awards/awards.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { StreetPhotosComponent } from './street-photos/street-photos.component';
import { TravelPhotosComponent } from './travel-photos/travel-photos.component';
import { ModelPhotosComponent } from './model-photos/model-photos.component';
import { AnimalPhotosComponent } from './animal-photos/animal-photos.component';
import { CelebrityPhotosComponent } from './celebrity-photos/celebrity-photos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MainComponent,
    AwardsComponent,
    AboutComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    CustomerComponent,
    StreetPhotosComponent,
    TravelPhotosComponent,
    ModelPhotosComponent,
    AnimalPhotosComponent,
    CelebrityPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
