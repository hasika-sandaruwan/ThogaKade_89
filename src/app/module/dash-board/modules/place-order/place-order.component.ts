import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../core/service/customer.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadAllCustomers();
  }
  customers:any[]=[];
  private loadAllCustomers() {
    this._customerService.getAllCustomers().subscribe(response=>{
      this.customers = response.data;
    }, error => {
      console.log(error);
    })
  }

}
