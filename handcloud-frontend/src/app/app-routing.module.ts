import { ToolbarNavigationComponent } from './core/components/toolbar-navigation/toolbar-navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'cars',
  //   loadChildren: () => import('./modules/cars/cars.module')
  //     .then(m => m.CarsModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: '/cars/used-cars',
  //   pathMatch: 'full'
  // }
  {
    path: '',
    component: ToolbarNavigationComponent,
    children: [
      {
        path: 'cars',
        loadChildren: () => import('./modules/cars/cars.module')
          .then(m => m.CarsModule)
      },
      {
        path: '**',
        redirectTo: '/cars/used-cars',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
