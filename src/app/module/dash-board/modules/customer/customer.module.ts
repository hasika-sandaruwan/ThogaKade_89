import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';


@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    SearchCustomerComponent,
    GetAllCustomersComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MatTabsModule
    ]
})
export class CustomerModule { }
