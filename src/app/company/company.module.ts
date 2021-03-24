import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompanyComponent, AddComponent, EditComponent, ListComponent, ViewComponent, NavigationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
