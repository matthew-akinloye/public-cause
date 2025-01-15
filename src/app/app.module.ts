import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroComponent } from './homepage/hero/hero.component';
import { CardsSectionComponent } from './homepage/cards-section/cards-section.component';
import { CardComponent } from './homepage/cards-section/card/card.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeroComponent,
    CardsSectionComponent,
    CardComponent,
    GetInvolvedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
