import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  constructor() { } 

  currentFattura;

  fatture = [{
    id: 1,
    importo: 350,
    destinatario: {
      id: 1,
      name: "Ivan",
      lastName: "Signorile"
    }
  },{
    id: 2,
    importo: 340.13,
    destinatario: {
      id: 2,
      name: "Fabio",
      lastName: "Signorile"
    }
  }]

  setCurrentFattura(fattura){
    this.currentFattura = fattura;
  }

  ngOnInit(): void {
  }

}
