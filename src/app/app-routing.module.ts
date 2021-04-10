import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [

 
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) , 
    canLoad: [AuthGuard]
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingPageModule) ,
    canLoad: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function canLoad(arg0: (m: typeof import("./tabs/tabs.module")) => typeof import("./tabs/tabs.module").TabsPageModule, canLoad: any, arg2: (typeof AuthGuard)[]): import("@angular/core").Type<any> | import("@angular/core").NgModuleFactory<any> | import("rxjs").Observable<import("@angular/core").Type<any>> | Promise<any> {
  throw new Error('Function not implemented.');
}

