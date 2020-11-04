import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/push-notification/push-notification.module').then( m => m.PushNotificationPageModule)
  },    
  {
    path: 'camera1',
    loadChildren: () => import('./pages/camera1/camera1.module').then( m => m.Camera1PageModule)
  },
  {
    path: 'camera2',
    loadChildren: () => import('./pages/camera2/camera2.module').then( m => m.Camera2PageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then( m => m.ChartsPageModule)
  },
  {
    path: 'mascaras',
    loadChildren: () => import('./pages/mascaras/mascaras.module').then( m => m.MascarasPageModule)
  },
  {
    path: 'push',
    loadChildren: () => import('./pages/push-notification/push-notification.module').then( m => m.PushNotificationPageModule)
  },
  {
    path: 'scroll',
    loadChildren: () => import('./pages/scroll/scroll.module').then( m => m.ScrollPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
