import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
      { path: 'view', component: ViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
