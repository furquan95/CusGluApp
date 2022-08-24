import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCompanyComponent } from './company/new-company/new-company.component';

const routes: Routes = [
  {path: '', redirectTo:'/company/new', pathMatch: 'full'},
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
