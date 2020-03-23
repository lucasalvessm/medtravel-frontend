import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { HttpClient } from '@angular/common/http';
import { BACKEND } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  uri = '/customer';

  constructor(private httpClient: HttpClient) { }

  login = (user: string, password: string): Observable<Customer> =>
    this.httpClient.post<Customer>(`${BACKEND}${this.uri}/login`, { user, password })
}
