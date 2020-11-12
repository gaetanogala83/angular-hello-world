import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FattureComponent } from './fatture/fatture.component';
import { UtentiComponent } from './utenti/utenti.component';

const routes: Routes = [{
  path: "fatture",
  component: FattureComponent
},{
  path: "",
  component: UtentiComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
