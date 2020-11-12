import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { UsersService } from '../users.service';
import { UtilsExternalServicesService } from '../utils-external-services.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  constructor(
    private utils : UtilsService,
    private usersService: UsersService,
    private exetrnalServices: UtilsExternalServicesService) { }

  currentUser;
  users;
  condominii = [];
  
  getUser(user){
    this.currentUser = user;
  }

  deleteUser(user){
    _.remove(this.users, (u) => {
        return u.id === user.id
    })

    this.currentUser = null;
  }

  retrieveCondominii(){

      this.exetrnalServices.getComdominii("/buildings.json", 4).subscribe((response:any)=>{

        console.log(response);
        this.condominii = response;
  
      }, (error:any) => {
        console.log(error);
      })
  }

  ngOnInit(): void {

    this.users = this.usersService.getUsers();
    this.retrieveCondominii();
  }

}
