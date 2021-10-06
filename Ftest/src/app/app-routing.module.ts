import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // this make easiest to have a structure, and we don't have to put the header in every module
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard', // implementing lazy loading, and possibility to add more modules and routes.
        // This avoid to load all the routes/components in the app, just the requested module with their components
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: '**', // if the route doesn't exist, redirect to dashboard
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**', // if the route doesn't exist, redirect to dashboard
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
