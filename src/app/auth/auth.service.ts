import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  integrationRoute = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isIntegrationRoute() {
    return this.integrationRoute.asObservable();
  }

  constructor(
    private router: Router,
    private _http: HttpClient
  ) { }

  
  getUsers(): Observable<any[]> {
    return this._http.get<any[]>(environment.jsonServerAPI + "logins");
  }
  
}

