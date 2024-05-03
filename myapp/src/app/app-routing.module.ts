import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FaqComponent } from './components/faq/faq.component';
import { WeddingVenuesComponent } from './components/wedding-venues/wedding-venues.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { WeddingAttireComponent } from './components/wedding-attire/wedding-attire.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'FAQ', component: FaqComponent
  },
  {
    path: 'weddingVenue', component: WeddingVenuesComponent
  },
  {
    path: 'invitation', component: InvitationComponent
  },
  {
    path: 'weddingAttire', component: WeddingAttireComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
