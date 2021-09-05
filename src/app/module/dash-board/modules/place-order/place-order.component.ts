import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../core/service/customer.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  selectedCustomer: any = null;

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  customers: any[] = [];

  private loadAllCustomers() {
    this._customerService.getAllCustomers().subscribe(response => {
      this.customers = response.data;
      if (response.data.length > 0) {
        this.selectedCustomer = response.data[0];
      }
    }, error => {
      console.log(error);
    })
  }

  selectCustomer(value: string) {
    for (const temp of this.customers) {
      if (value === temp.id) {
        this.selectedCustomer = temp;
        return;
      }
    }
  }
}
