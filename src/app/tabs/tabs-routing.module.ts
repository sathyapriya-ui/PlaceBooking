import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'discover',
        loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
      },
      // {
      //   path: 'discover-detail',
      //   loadChildren: () => import('./discover/discover-detail/discover-detail.module').then(m => m.DiscoverDetailPageModule)
      // },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
      },
      {
        path: 'new-offer',
        loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
      },
      {
        path: 'edit-offer/:id',
        loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
      },
      {
        path: 'offer-booking/:id',
        loadChildren: () => import('./offers/offer-booking/offer-booking.module').then(m => m.OfferBookingPageModule)
      }
      ,
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
