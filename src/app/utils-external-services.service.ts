import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsExternalServicesService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'https://ilcondominio50.waikikitech.it/api/backoffice/utils';

  public getComdominii(url, id):any{
    return this.http.post(this.baseUrl+url, {id:id});
  }

}
