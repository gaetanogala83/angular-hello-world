import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private users = [
    {
      id: 1,
      name: "Ivan",
      lastName: "Signorile",
      age: 32
    },
    {
      id: 2,
      name: "Fabio",
      lastName: "Signorile",
      age: 27
    }
  ]

public getUsers(){
  return this.users;
}

}
