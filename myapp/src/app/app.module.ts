import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersAndNavbarComponent } from './components/headers-and-navbar/headers-and-navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { WeddingVenuesComponent } from './components/wedding-venues/wedding-venues.component';
import { InvitationComponent } from './components/invitation/invitation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersAndNavbarComponent,
    HomePageComponent,
    FooterComponent,
    FaqComponent,
    WeddingVenuesComponent,
    InvitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
