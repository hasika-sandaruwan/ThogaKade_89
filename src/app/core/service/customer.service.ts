import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import CustomerDTO from "../model/CustomerDTO";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public saveCustomer(data: CustomerDTO): Observable<any> {
    return this.http.post(this.url+'customer/saveCustomer', {
      id: data.id,
      name: data.name,
      address: data.address,
      salary: data.salary
    });
  }
  public updateCustomer(data: CustomerDTO): Observable<any> {
    return this.http.put(this.url+'customer/updateCustomer', {
      id: data.id,
      name: data.name,
      address: data.address,
      salary: data.salary
    });
  }


}
