import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { NewCompanyComponent } from './new-company/new-company.component';

const routes: Routes = [
  {
    path: 'list',
    component: CompanyListComponent
  },
  {
    path: 'new',
    component: NewCompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
